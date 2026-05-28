import { test } from '../../fixtures/testFixtures';
import { users } from '../../data/users';

test('@regression User cannot login with invalid credentials', async ({ authActions }) => {

  await authActions.goToLoginPage();
  await authActions.login(users.invalid.username, users.invalid.password);
  await authActions.expectLoginError('Username and password do not match');
});