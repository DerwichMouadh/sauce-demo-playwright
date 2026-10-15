import { test } from "@playwright/test";

test("@playground Handle alert dialog", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // Set up the dialog listener BEFORE triggering the action that causes the dialog to appear (Selenium WebDriver equivalent of switchTo().alert())
  page.once("dialog", async (dialog) => {
    // Listen for the alert dialog event (Selenium WebDriver equivalent of switchTo().alert())
    console.log(`Dialog type: ${dialog.type()}`);
    console.log(`Dialog message: ${dialog.message()}`);

    await dialog.accept(); // Accept the alert dialog (Selenium WebDriver equivalent of acceptAlert)
  });

  await page.locator("#alertBtn").click(); // Click the button that triggers the alert dialog (Selenium WebDriver equivalent of click)
});
