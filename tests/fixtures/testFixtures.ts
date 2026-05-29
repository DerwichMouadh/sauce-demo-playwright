import { test as base, expect, Page } from '@playwright/test';
import { users } from '../data/users';

import { AuthActions } from '../../actions/auth.actions';
import { CartActions } from '../../actions/cart.actions';
import { InventoryActions } from '../../actions/inventory.actions';

type Fixtures = {
  authActions: AuthActions;
  cartActions: CartActions;
  inventoryActions: InventoryActions;
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({

  authActions: async ({ page }, use) => {
    await use(new AuthActions(page));
  },

  loggedInPage: async ({ page }, use) => {
    const auth = new AuthActions(page);

    await auth.goToLoginPage();
    await auth.login(
      users.standard.username,
      users.standard.password
    );

    await use(page);
  },

  cartActions: async ({ loggedInPage }, use) => {
    await use(new CartActions(loggedInPage));
  },

  inventoryActions: async ({ loggedInPage }, use) => {
    await use(new InventoryActions(loggedInPage));
  }

});

export { expect };