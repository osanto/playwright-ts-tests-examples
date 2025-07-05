import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class HoversPage extends BasePage {
    readonly pageHeader: Locator;
    readonly description: Locator;
    readonly images: Locator;
    readonly hoverCaptions: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.description = this.page.locator('p');
        this.images = this.page.locator('.figure img');
        this.hoverCaptions = this.page.locator('.figcaption');
    }

    getCaption(index: number){
        return this.hoverCaptions.nth(index);
    }

    getUserName(index: number) {
        return this.hoverCaptions.nth(index).locator('h5');
    }

    getUserLink(index: number){
        return this.hoverCaptions.nth(index).locator('a');
    }

    async hoverOverImage(index: number) {
        await this.images.nth(index).hover();
    }
}