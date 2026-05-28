import { test } from '../../fixtures/testFixtures';
import { users } from '../../data/users';

test('@smoke User can login with valid credentials', async ({ authActions }) => {
  await authActions.goToLoginPage();
  await authActions.login(users.standard.username, users.standard.password);
  await authActions.expectLoginSuccess();
});