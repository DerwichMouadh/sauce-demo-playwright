import { test } from '../../fixtures/testFixtures';
import { users } from '../../data/users';
import { AuthActions } from '../../../actions/auth.actions';

test('@smoke User can login with valid credentials', async ({ page }) => {
  const auth = new AuthActions(page);

  await auth.goToLoginPage();
  await auth.login(users.standard.username, users.standard.password);
  await auth.expectLoginSuccess();
});