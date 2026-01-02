import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class AddRemoveElementsPage extends BasePage {
    readonly pageHeader: Locator;
    readonly addElementButton: Locator;
    readonly deleteElementButtons: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.addElementButton = this.page.locator('button:has-text("Add Element")');
        this.deleteElementButtons = this.page.locator('button:has-text("Delete")');
    }
}