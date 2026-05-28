import { test } from '../../fixtures/testFixtures';

test('@regression User cannot login with empty fields', async ({ authActions }) => {

  // Act
  await authActions.goToLoginPage();
  await authActions.login('', '');

  // Assert
  await authActions.expectErrorMessage(
    'Epic sadface: Username is required'
  );
});