import { test } from '../../fixtures/testFixtures';
import { users } from '../../data/users';
import { AuthActions } from '../../../actions/auth.actions';

test('@regression User cannot login with invalid credentials', async ({ page }) => {
  const auth = new AuthActions(page);

  await auth.goToLoginPage();
  await auth.login(users.invalid.username, users.invalid.password);
  await auth.expectLoginError('Username and password do not match');
});