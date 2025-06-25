import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class CheckboxesPage extends BasePage {
    readonly pageHeader: Locator;
    readonly firstCheckbox: Locator;
    readonly secondCheckbox: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.firstCheckbox = this.page.locator('#checkboxes input[type="checkbox"]').nth(0);
        this.secondCheckbox = this.page.locator('#checkboxes input[type="checkbox"]').nth(1);
    }

    async getPageHeader() {
        return await this.pageHeader.innerText();
    }
}