import { test, expect } from '../../fixtures/testFixtures';

test('@smoke Add single item to cart', async ({ loggedInPage, cartActions }) => {

  // Act
  await cartActions.addBackpackToCart();

  // Assert: cart badge appears with 1 item
  const cartBadge = loggedInPage.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('1');
});