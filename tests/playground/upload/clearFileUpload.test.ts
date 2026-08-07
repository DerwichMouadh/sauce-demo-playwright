import { test, expect } from '@playwright/test';
import path from 'path';

test('@playground Clear uploaded file', async ({ page }) => {

  await page.goto(
    'https://testautomationpractice.blogspot.com/'
  );

  const filePath = path.join(
    __dirname,
    '../../../resources/sample.txt'
  );

  const fileInput = page.locator('#singleFileInput');

  // Upload file
  await fileInput.setInputFiles(filePath);

  // Verify file selected
  await expect(fileInput).toHaveValue(
    /sample.txt/
  );

  // Clear uploaded file
  await fileInput.setInputFiles([]);

  // Verify input is empty
  await expect(fileInput).toHaveValue('');

});