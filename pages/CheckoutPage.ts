import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;

    private readonly summaryItems: Locator;
    private readonly summaryTotal: Locator;

    private readonly finishButton: Locator;
    private readonly confirmationMessage: Locator;

    constructor(page: Page) {
        super(page);

        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.locator('#last-name');
        this.postalCodeInput = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');

        this.summaryItems = page.locator('.cart_item');
		this.summaryTotal = page.locator('.summary_total_label');
		
        this.finishButton = page.locator('#finish');
        this.confirmationMessage = page.locator('.complete-header');
    }

    async enterCustomerDetails(
        firstName: string,
        lastName: string,
        postalCode: string
    ): Promise<void> {

        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinue(): Promise<void> {
        await this.continueButton.click();
    }

    async getSummaryProductName(): Promise<string> {
        return await this.summaryItems
            .first()
            .locator('.inventory_item_name')
            .innerText();
    }

    async getSummaryTotal(): Promise<string> {
        return await this.summaryTotal.innerText();
    }

    async clickFinish(): Promise<void> {
        await this.finishButton.click();
    }

    async getConfirmationMessage(): Promise<string> {
        return await this.confirmationMessage.innerText();
    }
}