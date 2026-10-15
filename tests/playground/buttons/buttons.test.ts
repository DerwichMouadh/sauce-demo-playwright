import { test, expect } from '@playwright/test';

test.describe('Buttons', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://qaplayground.com/practice/buttons'
    );
  });


  // BTN_001
  test('@playground BTN_001: Click button', async ({ page }) => {

    await page
      .getByTestId('btn-navigate-home')
      .click();

    await expect(
      page.getByTestId('result-s01')
    ).toContainText('Home');
  });


  // BTN_004
  test('@playground BTN_004: Double-click button', async ({ page }) => {

    await page
      .getByTestId('btn-double-click')
      .dblclick();

    await expect(
      page.getByTestId('result-s07')
    ).toHaveText('Double clicked!');
  });


  // BTN_005
  test('@playground BTN_005: Right-click button', async ({ page }) => {

    await page
      .getByTestId('btn-right-click')
      .click({ button: 'right' });

    await expect(
      page.getByTestId('result-s08')
    ).toContainText('Context menu triggered!');
  });


  // BTN_006
  test('@playground BTN_006: Disabled button', async ({ page }) => {

    const disabledButton = page.getByTestId('btn-disabled');

    await expect(disabledButton).toBeDisabled();
  });

});