import { test } from '../../fixtures/testFixtures';

test('@regression Cart counter updates correctly', async ({ cartActions }) => {

  // Add first item
  await cartActions.addBackpackToCart();
  await cartActions.expectCartBadgeCount(1);

  // Add second item
  await cartActions.addBikeLightToCart();
  await cartActions.expectCartBadgeCount(2);
});