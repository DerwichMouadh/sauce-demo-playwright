import { test, expect } from '../../fixtures/testFixtures';

test('Remove item from cart', async ({ cartActions }) => {

  await cartActions.addBackpackToCart();
  await cartActions.expectCartBadgeCount(1);

  await cartActions.removeBackpackFromCart();

  await cartActions.expectCartBadgeCount(0);
});