import { test } from '../../fixtures/testFixtures';

test('@smoke Add multiple items to cart', async ({ cartActions }) => {

  // Act
  await cartActions.addAllStandardItems();

  // Assert
  await cartActions.expectCartBadgeCount(2);

  await cartActions.goToCart();

  await cartActions.expectItemInCart('Sauce Labs Backpack');
  await cartActions.expectItemInCart('Sauce Labs Bike Light');
});