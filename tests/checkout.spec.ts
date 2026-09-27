import { test, expect } from '../fixtures/baseTest';
import { standardUser } from '../utils/testData';

test.beforeEach(async ({ loginPage }) => {

    await loginPage.login(
        standardUser.username,
        standardUser.password
    );
});

test('Verify checkout order summary', async ({
    productPage,
    cartPage,
    checkoutPage
}) => {

    const productName = 'Sauce Labs Backpack';

    await productPage.addProductToCart(productName);
    await productPage.openCart();
    await cartPage.clickCheckout();
    await checkoutPage.enterCustomerDetails(
        'Vaishnavi',
        'Perumalla',
        '500001'
    );

    await checkoutPage.clickContinue();

    const summaryProduct = await checkoutPage.getSummaryProductName();

    const summaryTotal = await checkoutPage.getSummaryTotal();

    expect(summaryProduct).toBe(productName);
    expect(summaryTotal).toContain('$32.39');
});

test('Verify order confirmation message', async ({
    productPage,
    cartPage,
    checkoutPage
}) => {

    const productName = 'Sauce Labs Backpack';

    await productPage.addProductToCart(productName);
    await productPage.openCart();
    await cartPage.clickCheckout();
    await checkoutPage.enterCustomerDetails(
        'Vaishnavi',
        'Perumalla',
        '500001'
    );

    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();

    const confirmation = await checkoutPage.getConfirmationMessage();
    expect(confirmation).toBe('Thank you for your order!');
});