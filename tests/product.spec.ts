import { test, expect } from '../fixtures/baseTest';
import { standardUser } from '../utils/testData';

test.beforeEach(async ({ loginPage }) => {

    await loginPage.login(
        standardUser.username,
        standardUser.password
    );
});

test('Verify products are displayed', async ({ productPage }) => {

    const productCount = await productPage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
});

test('Verify products can be sorted by name A-Z', async ({ productPage }) => {

    await productPage.sortByNameAZ();
    const firstProduct = await productPage.getFirstProductName();
    expect(firstProduct).toBe('Sauce Labs Backpack');
});

test('Verify products can be sorted by price low to high', async ({ productPage }) => {

    await productPage.sortByPriceLowToHigh();
    const firstProduct = await productPage.getFirstProductName();
    expect(firstProduct).toBe('Sauce Labs Onesie');
});