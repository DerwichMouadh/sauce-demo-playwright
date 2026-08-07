import { test, expect } from '@playwright/test';
import path from 'path'; // Import the 'path' module to work with file paths

test('@playground Upload a single file', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.join(
    __dirname, // Get the absolute path to the file
    '../../../resources/sample.txt'
  );

  await page
    .locator('#file-upload')
    .setInputFiles(filePath); // Set the file input to the specified file (Selenium WebDriver equivalent of sendKeys & absolute path)

  await page.locator('#file-submit').click();

  await expect(
    page.locator('#uploaded-files')
  ).toHaveText('sample.txt'); // Assert that the uploaded file name is displayed on the page (Selenium WebDriver equivalent of getText & assert)

});