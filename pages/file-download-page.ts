import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class FileDownloadPage extends BasePage {
    readonly pageHeader: Locator;
    readonly filesToDownload: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.filesToDownload = this.page.locator('.example a[href^="download"]');
    }
}