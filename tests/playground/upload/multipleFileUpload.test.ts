import { test, expect } from '@playwright/test';
import path from 'path';

test('@playground Upload multiple files', async ({ page }) => {

  await page.goto(
    'https://testautomationpractice.blogspot.com'
  );

  const firstFile = path.join(
    __dirname,
    '../../../resources/sample.txt'
  );

  const secondFile = path.join(
    __dirname,
    '../../../resources/sample2.txt'
  );

  await page
    .locator('#multipleFilesInput')
    .setInputFiles([
      firstFile,
      secondFile
    ]);

  await page
    .getByRole('button', { name: 'Upload Multiple Files' })
    .click();

  await expect(
    page.getByText('sample.txt')
  ).toBeVisible();

  await expect(
    page.getByText('sample2.txt')
  ).toBeVisible();

});