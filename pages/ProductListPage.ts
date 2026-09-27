import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductListPage extends BasePage {

    private readonly productItems: Locator;
    private readonly sortDropdown: Locator;
    private readonly cartBadge: Locator;
	private readonly cartLink: Locator;

    constructor(page: Page) {
        super(page);
        this.productItems = page.locator('.inventory_item');
        this.sortDropdown = page.locator('.product_sort_container');
        this.cartBadge = page.locator('.shopping_cart_badge');
		this.cartLink = page.locator('.shopping_cart_link');
    }

    async getProductCount(): Promise<number> {
        return await this.productItems.count();
    }

    async sortByNameAZ(): Promise<void> {
        await this.sortDropdown.selectOption('az');
    }

    async sortByPriceLowToHigh(): Promise<void> {
        await this.sortDropdown.selectOption('lohi');
    }

    async getFirstProductName(): Promise<string> {
        return await this.productItems
            .first()
            .locator('.inventory_item_name')
            .innerText();
    }

    async getFirstProductPrice(): Promise<string> {
        return await this.productItems
            .first()
            .locator('.inventory_item_price')
            .innerText();
    }

    async addProductToCart(productName: string): Promise<void> {
        const product = this.productItems.filter({
            hasText: productName
        });
        await product
            .getByRole('button', { name: /Add to cart/i })
            .click();
    }

    async getCartItemCount(): Promise<number> {
        if (await this.cartBadge.count() === 0) {
            return 0;
        }

        return Number(await this.cartBadge.innerText());
    }
	
	async openCart(): Promise<void> {
	    await this.cartLink.click();
	}
}