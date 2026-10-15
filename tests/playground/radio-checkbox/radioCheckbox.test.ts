import { test, expect } from "@playwright/test";

test.describe("Radio Buttons and Checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://qaplayground.com/practice/radio-checkbox");
  });

  // RC_001
  test("@playground RC_001: Check a checkbox", async ({ page }) => {
    const checkbox = page.getByTestId("chk-accept-terms");

    await checkbox.check();

    await expect(checkbox).toBeChecked();
  });

  // RC_002
  test("@playground RC_002: Uncheck a checkbox", async ({ page }) => {
    const checkbox = page.getByTestId("chk-accept-terms");

    await checkbox.check();
    await checkbox.uncheck();

    await expect(checkbox).not.toBeChecked();
  });

  // RC_004
  test("@playground RC_004: Only one radio can be selected", async ({
    page,
  }) => {
    const starter = page.getByTestId("radio-plan-starter");
    const pro = page.getByTestId("radio-plan-pro");

    await starter.check();

    await expect(starter).toBeChecked();

    await pro.check();

    await expect(pro).toBeChecked();
    await expect(starter).not.toBeChecked();

    // Verify the UI result
    await expect(page.getByTestId("result-s02")).toHaveText("Selected: Pro");
  });

  // RC_006
  test("@playground RC_006: Newsletter checkbox is checked by default", async ({
    page,
  }) => {
    const newsletter = page.getByTestId("chk-newsletter");

    await expect(newsletter).toBeChecked();
  });

  // RC_007
  test("@playground RC_007: Disabled checkbox", async ({ page }) => {
    const disabledCheckbox = page.getByTestId("chk-disabled");

    await expect(disabledCheckbox).toBeDisabled();
  });

  // RC_010
  test("@playground RC_010: Select radio inside Enterprise card", async ({
    page,
  }) => {
    const enterpriseCard = page.locator(
      '[data-testid="plan-card"][data-plan="enterprise"]',
    );

    const enterpriseRadio = enterpriseCard.getByRole("radio");

    await enterpriseRadio.check();

    await expect(enterpriseRadio).toBeChecked();
  });
});
