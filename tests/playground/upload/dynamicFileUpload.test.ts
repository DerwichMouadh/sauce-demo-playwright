import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('@playground Upload dynamically created file', async ({ page }) => {

  const fileName = `dynamic-test-file-${crypto.randomUUID()}.txt`;

  const filePath = path.join(
    __dirname,
    '../../../resources',
    fileName
  );

  try {

    // Create file
    fs.writeFileSync(
      filePath,
      'This file was created by Playwright test'
    );

    await page.goto(
      'https://testautomationpractice.blogspot.com/'
    );

    const fileInput = page.locator('#singleFileInput');

    await fileInput.setInputFiles(filePath);

    await expect(fileInput)
      .toHaveValue(new RegExp(fileName));

  } finally {

    // Cleanup after test
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

  }

});