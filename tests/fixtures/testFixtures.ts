import { test as base, Page } from '@playwright/test';
import { users } from '../data/users';
import { AuthActions } from '../../actions/auth.actions';
import { CartActions } from '../../actions/cart.actions';

type Fixtures = {
  authActions: AuthActions;
  cartActions: CartActions;
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  authActions: async ({ page }, use) => {
    await use(new AuthActions(page));
  },

  cartActions: async ({ page }, use) => {
    await use(new CartActions(page));
  },

  loggedInPage: async ({ page }, use) => {
    const auth = new AuthActions(page);

    await auth.goToLoginPage();
    await auth.login(users.standard.username, users.standard.password);

    await use(page);
  }
});

export const expect = test.expect;