import { test, expect } from '../../fixtures/testFixtures';

test('@regression User can continue shopping from cart page', async ({
  cartActions,
  loggedInPage
}) => {

  // Add item
  await cartActions.addBackpackToCart();

  // Go to cart
  await cartActions.goToCart();

  // Click continue shopping
  await loggedInPage.locator('#continue-shopping').click();

  // Assert redirected to inventory page
  await expect(loggedInPage).toHaveURL(
    'https://www.saucedemo.com/inventory.html'
  );
});