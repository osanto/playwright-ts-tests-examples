import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class KeyPressesPage extends BasePage {
    readonly pageHeader: Locator;
    readonly description: Locator;
    readonly inputArea: Locator;
    readonly enteredKey: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.description = this.page.locator('div.example > p').first();
        this.inputArea = this.page.locator('input#target');
        this.enteredKey = this.page.locator('#result');
    }

}