import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductListPage } from '../pages/ProductListPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type TestFixtures = {
    loginPage: LoginPage;
    productPage: ProductListPage;
	cartPage: CartPage;
	checkoutPage: CheckoutPage;
};

export const test = base.extend<TestFixtures>({
    loginPage: async ({ page }, use) => {
        await page.goto('/');
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductListPage(page);
        await use(productPage);
    },
	
	cartPage: async ({ page }, use) => {
	    const cartPage = new CartPage(page);
	    await use(cartPage);
	},
	
	checkoutPage: async ({ page }, use) => {
	    const checkoutPage = new CheckoutPage(page);
	    await use(checkoutPage);
	}
});

export { expect };