import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class DropdownPage extends BasePage {
    readonly pageHeader: Locator;
    readonly dropdownElement: Locator;
    readonly dropdownOptions: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.dropdownElement = this.page.locator('#dropdown');
        this.dropdownOptions = this.dropdownElement.locator('option');
    }

    async getPageHeader() {
        return await this.pageHeader.innerText();
    }

    async selectOptionByValue(value: string) {
        await this.dropdownElement.selectOption(value);
    }

    getSelectedOption() {
        return this.dropdownElement.locator('option:checked');
    }
}