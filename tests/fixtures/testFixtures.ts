import { test as base, Page } from '@playwright/test';
import { login } from '../../helpers/authHelper';
import { users } from '../data/users';

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    await login(page, users.standard.username, users.standard.password);
    await use(page);
  }
});

export const expect = test.expect;