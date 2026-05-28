import { test, expect } from '../../fixtures/testFixtures';

test('@regression Remove item from cart', async ({ loggedInPage, cartActions }) => {

  await cartActions.addBackpackToCart();
  await cartActions.expectCartBadgeCount(1);

  await cartActions.removeBackpackFromCart();

  await cartActions.expectCartBadgeCount(0);
});