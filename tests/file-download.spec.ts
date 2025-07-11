import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('File Download page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`download`);
    });

    test('Verify page elements', async ({ fileDownloadPage }) => {
        await expect(fileDownloadPage.pageHeader).toHaveText('File Downloader');

        const downloadLinks = fileDownloadPage.filesToDownload;
        const count = await downloadLinks.count();
        for (let i = 0; i < count; i++) {
            await expect(downloadLinks.nth(i)).toBeVisible();
        }
    });
});