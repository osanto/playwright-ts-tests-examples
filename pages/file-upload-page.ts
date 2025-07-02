import * as fs from 'fs';

import { Page, Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class FileUploadPage extends BasePage {
    readonly pageHeader: Locator;
    readonly chooseFileButton: Locator;
    readonly uploadButton: Locator;
    readonly dragAndDropArea: Locator;
    readonly uploadedFileName: Locator;

    constructor(page: Page) {
        super(page);
        this.pageHeader = this.page.locator('h3');
        this.chooseFileButton = this.page.getByRole('button', { name: 'Choose File' });
        this.uploadButton = this.page.getByRole('button', { name: 'Upload' });
        this.dragAndDropArea = this.page.locator('#drag-drop-upload');
        this.uploadedFileName = this.page.locator('#uploaded-files');
    }

    public async uploadFile(filePath: string) {
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        await this.page.setInputFiles('#file-upload', filePath);
        await this.uploadButton.click();
    }

}