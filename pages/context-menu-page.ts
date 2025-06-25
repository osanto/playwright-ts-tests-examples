import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class ContextMenuPage extends BasePage {
    readonly pageHeader: Locator;
    readonly contextMenuDescription: Locator;
    readonly actionDescription: Locator;
    readonly contextMenuArea: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.contextMenuDescription = this.page.locator('.example p').first();
        this.actionDescription = this.page.locator('.example p').nth(1);
        this.contextMenuArea = this.page.locator('#hot-spot');
    }

    async rightClickOnContextArea() {
        await this.contextMenuArea.click({ button: 'right' });
    }   
}