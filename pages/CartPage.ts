import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    private readonly cartItems: Locator;
    private readonly checkoutButton: Locator;
    private readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        super(page);
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
    }

    async getCartItemCount(): Promise<number> {
        return await this.cartItems.count();
    }

    async isProductPresent(productName: string): Promise<boolean> {
        const product = this.cartItems.filter({
            hasText: productName
        });
        return await product.count() > 0;
    }

    async removeProduct(productName: string): Promise<void> {
        const product = this.cartItems.filter({
            hasText: productName
        });
        await product
            .getByRole('button', { name: /Remove/i })
            .click();
    }

    async clickCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async continueShopping(): Promise<void> {
        await this.continueShoppingButton.click();
    }
}