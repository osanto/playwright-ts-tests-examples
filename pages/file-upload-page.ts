import * as fs from 'fs';

import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class FileUploadPage extends BasePage {
    readonly pageHeader: Locator;
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly dragAndDropArea: Locator;
    readonly uploadedFileName: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.fileInput = this.page.locator('#file-upload');
        this.uploadButton = this.page.locator('#file-submit');
        this.dragAndDropArea = this.page.locator('#drag-drop-upload');
        this.uploadedFileName = this.page.locator('#uploaded-files');
    }

    public async uploadFile(filePath: string) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
    }

}