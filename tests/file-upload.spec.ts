import path from 'path';

import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('File Upload page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`upload`);
    });

    test('Verify page elements', async ({ fileUploadPage }) => {
        await expect(fileUploadPage.pageHeader).toHaveText('File Uploader');
        await expect(fileUploadPage.fileInput).toBeVisible();
        await expect(fileUploadPage.uploadButton).toBeVisible();    
        await expect(fileUploadPage.dragAndDropArea).toBeVisible();
    });

    test('Upload file via "Choose file" button', async ({ fileUploadPage }) => {
        const fileName = 'file-to-upload.txt';
        const filePath = path.resolve(__dirname, `../test-data/${fileName}`);   
        await fileUploadPage.uploadFile(filePath);

        await expect(fileUploadPage.pageHeader).toHaveText('File Uploaded!');
        await expect(fileUploadPage.uploadedFileName).toHaveText(fileName);
    });
});