import { test as base, Page } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { users } from '../data/users';
import { AuthActions } from '../../actions/auth.actions';

type Fixtures = {
  authActions: AuthActions;
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  authActions: async ({ page }, use) => {
    const auth = new AuthActions(page);
    await use(auth);
  },

  loggedInPage: async ({ page }, use) => {
    await login(page, users.standard.username, users.standard.password);
    await use(page);
  }
});

export const expect = test.expect;