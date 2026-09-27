import { test, expect } from '../fixtures/baseTest';
import { standardUser } from '../utils/testData';

test('Verify successful login with standard user', async ({ loginPage, page }) => {

    await loginPage.login(
        standardUser.username,
        standardUser.password
    );

    await expect(page).toHaveURL(/inventory/);
});

test('Verify login with invalid credentials', async ({ loginPage }) => {

    await loginPage.login(
        'invalid_user',
        'wrong_password'
    );

	expect(await loginPage.getErrorMessage()).toContain('Username and password do not match');
});

test('Verify login with empty password', async ({ loginPage }) => {

    await loginPage.login(
        standardUser.username,
        ''
    );

	expect(await loginPage.getErrorMessage()).toContain('Password is required');
});