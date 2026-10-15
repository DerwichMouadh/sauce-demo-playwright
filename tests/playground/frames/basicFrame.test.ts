import { test, expect } from '@playwright/test';

test('@playground Interact with basic iframe', async ({ page }) => {

  await page.goto(
    'https://qaplayground.com/practice/iframes'
  );

  const frame = page.frameLocator(
    '[data-testid="iframe-basic"]'
  );

  await frame
    .getByTestId('iframe-name-input')
    .fill('Mouadh');

  await frame
    .getByTestId('iframe-submit-btn')
    .click();

  await expect(
    frame.getByText('Submitted: Mouadh')
  ).toBeVisible();

});