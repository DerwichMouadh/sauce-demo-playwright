import { test, expect } from '@playwright/test';

test('@playground Interact with iframe form', async ({ page }) => {

  await page.goto(
    'https://qaplayground.com/practice/iframes'
  );

  const frame = page.frameLocator(
    '[data-testid="iframe-form"]'
  );

  // Select JavaScript
  await frame
    .getByTestId('iframe-lang-select')
    .selectOption({ label: 'JavaScript' });
    

  // Accept the terms
  await frame
    .getByLabel('I agree to the terms')
    .check();

  // Verify the checkbox is checked
  await expect(
    frame.getByLabel('I agree to the terms')
  ).toBeChecked();

});