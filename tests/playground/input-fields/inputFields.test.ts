import { test, expect } from '@playwright/test';

test.describe('Input Fields', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://qaplayground.com/practice/input-fields'
    );
  });

  // S01
  test('@playground S01: Type a Movie Name', async ({ page }) => {

    const movieInput = page.getByLabel('Movie name');

    await movieInput.fill('Interstellar');

    await page
      .getByRole('button', { name: 'Submit' })
      .click();

    await expect(
      page.getByTestId('result-s01')
    ).toHaveText('You entered: Interstellar');
  });


  // S02
  test('@playground S02: Append Text & Press Tab', async ({ page }) => {

    const appendInput = page.getByLabel(
      'Append text and press Tab'
    );

    await appendInput.fill('Avengers');

    await appendInput.press('Tab');

    await expect(
      page.getByTestId('result-s02')
    ).toHaveText('Current value: Avengers');
  });


  // S03
  test('@playground S03: Read the Field Value', async ({ page }) => {

    const readInput = page.getByLabel(
      'Field with a value to read'
    );

    const value = await readInput.inputValue();

    expect(value).toBe('The Matrix');
  });


  // S04
  test('@playground S04: Clear the Field', async ({ page }) => {

    const clearInput = page.getByLabel('Field to clear');

    await clearInput.clear();

    await expect(clearInput).toHaveValue('');
  });


  // S05
  test('@playground S05: Disabled Input Field', async ({ page }) => {

    const disabledInput = page.getByLabel('Disabled input');

    await expect(disabledInput).toBeDisabled();
  });


  // S06
  test('@playground S06: Readonly Input Field', async ({ page }) => {

    const readonlyInput = page.getByLabel('Readonly input');

    await expect(readonlyInput).toHaveAttribute(
      'readonly',
      ''
    );
  });

});