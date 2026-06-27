import { Page, Locator, expect } from '@playwright/test';

export class CartActions {
  // ========================
  // REUSABLE LOCATORS (PROPERTIES)
  // ========================
  private readonly backpackAddBtn: Locator;
  private readonly backpackRemoveBtn: Locator;
  private readonly bikeLightAddBtn: Locator;
  private readonly bikeLightRemoveBtn: Locator;
  private readonly cartBadge: Locator;
  private readonly cartLink: Locator;
  private readonly inventoryList: Locator;
  // NOW IT MATCHES THE REST EXACTLY
  private readonly cartItem: Locator;

  constructor(private page: Page) {
    // Centralized Locator Initialization
    this.backpackAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.backpackRemoveBtn = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.bikeLightAddBtn = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.bikeLightRemoveBtn = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    this.inventoryList = page.locator('.inventory_list');
    // INITIALIZED EXACTLY THE SAME WAY
    this.cartItem = page.locator('.cart_item');
  }

  // ========================
  // ADD ITEMS
  // ========================
  async addBackpackToCart() {
    await this.ensureOnInventoryPage();
    await expect(this.backpackAddBtn).toBeVisible();
    await this.backpackAddBtn.click();
  }

  async addBikeLightToCart() {
    await this.ensureOnInventoryPage();
    await expect(this.bikeLightAddBtn).toBeVisible();
    await this.bikeLightAddBtn.click();
  }

  async addAllStandardItems() {
    await this.addBackpackToCart();
    await this.addBikeLightToCart();
  }

  // ========================
  // REMOVE ITEMS
  // ========================
  async removeBackpackFromCart() {
    await this.backpackRemoveBtn.click();
  }

  async removeBikeLightFromCart() {
    await this.bikeLightRemoveBtn.click();
  }

  // ========================
  // NAVIGATION
  // ========================
  async goToCart() {
    await this.cartLink.click();
  }

  // ========================
  // VALIDATIONS
  // ========================
  async expectCartBadgeCount(count: number) {
    const badge = this.cartBadge;

    if (count === 0) {
      await expect(badge).toHaveCount(0);
      return;
    }

    await expect(badge).toBeVisible();
    await expect(badge).toHaveText(String(count));
  }

  async expectItemInCart(itemName: string) {
    // REUSES THE LOCATOR AND FILTERS BY TEXT CLEANLY
    await expect(
      this.cartItem.filter({ hasText: itemName })
    ).toBeVisible();
  }

  async expectItemNotInCart(itemName: string) {
    // REUSES THE LOCATOR AND FILTERS BY TEXT CLEANLY
    await expect(
      this.cartItem.filter({ hasText: itemName })
    ).toHaveCount(0);
  }

  async ensureOnInventoryPage() {
    await this.page.waitForURL('**/inventory.html');
    await this.inventoryList.waitFor();
  }
}
