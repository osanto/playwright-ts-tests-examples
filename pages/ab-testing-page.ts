import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class ABTestingPage extends BasePage {
    readonly pageHeader: Locator;
    readonly contentText: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.contentText = this.page.locator('div.example >p');
    }

    async getPageHeader() {
        return await this.pageHeader.innerText();
    }

    async getContentText() {
        return await this.contentText.innerText();
    }
}
