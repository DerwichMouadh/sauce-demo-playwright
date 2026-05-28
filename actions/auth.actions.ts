import { Page, expect } from '@playwright/test';

export class AuthActions {
  constructor(private page: Page) {}

  async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }

  async expectLoginError(message: string) {
    const error = this.page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText(message);
  }

    async expectErrorMessage(message: string) {
    await expect(this.page.locator('[data-test="error"]'))
      .toHaveText(message);
  }
}