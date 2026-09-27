import { test, expect } from '../fixtures/baseTest';
import { standardUser } from '../utils/testData';

test.beforeEach(async ({ loginPage }) => {

    await loginPage.login(
        standardUser.username,
        standardUser.password
    );
});

test('Verify cart badge count becomes 1 after adding one product', async ({
    productPage
}) => {

    await productPage.addProductToCart(
        'Sauce Labs Backpack'
    );

    const cartCount = await productPage.getCartItemCount();
    expect(cartCount).toBe(1);
});

test('Verify cart badge count becomes 2 after adding two products', async ({
    productPage
}) => {

    await productPage.addProductToCart(
        'Sauce Labs Backpack'
    );

    await productPage.addProductToCart(
        'Sauce Labs Bike Light'
    );

    const cartCount = await productPage.getCartItemCount();
    expect(cartCount).toBe(2);
});

test('Verify product can be removed from cart', async ({
    productPage,
    cartPage
}) => {

    const productName = 'Sauce Labs Backpack';

    await productPage.addProductToCart(productName);
    await productPage.openCart();

    await cartPage.removeProduct(productName);

    const isProductPresent = await cartPage.isProductPresent(productName);
    expect(isProductPresent).toBe(false);
});

test('Verify cart retains item after navigating back to product listing', async ({
    productPage,
    cartPage
}) => {

    const productName = 'Sauce Labs Backpack';

    await productPage.addProductToCart(productName);
    await productPage.openCart();

    expect(await cartPage.isProductPresent(productName)).toBe(true);

    await cartPage.continueShopping();

    const cartCount = await productPage.getCartItemCount();
    expect(cartCount).toBe(1);
});