import { test, expect } from '@playwright/test';

test('@playground Interact with multiple iframes', async ({ page }) => {

  await page.goto(
    'https://qaplayground.com/practice/iframes'
  );

  // Frame 1 — locate by data-testid
  const frameOne = page.frameLocator(
    '[data-testid="iframe-frame-1"]'
  );

  await frameOne
    .getByTestId('iframe-f1-action-btn')
    .click();

  // Frame 2 — locate by name
  const frameTwo = page.frameLocator(
    'iframe[name="frame-two"]'
  );

  await frameTwo
    .getByRole('button', {
      name: 'Activate Frame Two'
    })
    .click();

  // Frame 3 — locate by title
  const frameThree = page.frameLocator(
    'iframe[title="Frame Three"]'
  );

  await frameThree
    .getByRole('button', {
      name: 'Confirm Action'
    })
    .click();

});