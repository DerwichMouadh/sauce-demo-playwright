import { test, expect } from '@playwright/test';

test('@playground Dismiss confirmation dialog', async ({ page }) => {

  await page.goto(
    'https://testautomationpractice.blogspot.com/'
  );

  page.once('dialog', async dialog => {

    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Dialog message: ${dialog.message()}`);

    await dialog.dismiss();

  });

  await page
    .getByRole('button', {
      name: 'Confirmation Alert',
      exact: true
    })
    .click();

  await expect(
    page.locator('#demo')
  ).toHaveText('You pressed Cancel!');

});