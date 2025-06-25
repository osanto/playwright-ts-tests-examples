import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class DropdownPage extends BasePage {
    readonly pageHeader: Locator;
    readonly dropdown: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.dropdown = this.page.locator('#dropdown');
    }

    async getPageHeader() {
        return await this.pageHeader.innerText();
    }

    async getDropdownValue() {
        return await this.dropdown.inputValue();
    }
}