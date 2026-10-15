import { test, expect } from '@playwright/test';

test('@playground Handle prompt dialog', async ({ page }) => {

  await page.goto(
    'https://testautomationpractice.blogspot.com/'
  );

  page.once('dialog', async dialog => {

    console.log('Dialog type:', dialog.type());
    console.log('Dialog message:', dialog.message());
    console.log('Dialog default value:', dialog.defaultValue());

    await dialog.accept('Mouadh');

  });

  await page
    .getByRole('button', {
      name: 'Prompt Alert',
      exact: true
    })
    .click();

  await expect(
    page.locator('#demo')
  ).toHaveText('Hello Mouadh! How are you today?');

});