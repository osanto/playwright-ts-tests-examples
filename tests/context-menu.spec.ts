import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Context Menu page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`context_menu`);
    });

    test('Verify page elements', async ({ contextMenuPage }) => {
        await expect.soft(contextMenuPage.pageHeader).toHaveText('Context Menu');
        await expect.soft(contextMenuPage.contextMenuDescription).toHaveText('Context menu items are custom additions that appear in the right-click menu.');
        await expect.soft(contextMenuPage.actionDescription).toHaveText('Right-click in the box below to see one called \'the-internet\'. When you click it, it will trigger a JavaScript alert.');
        await expect.soft(contextMenuPage.contextMenuArea).toBeVisible();
    });

    test('Verify context menu interaction', async ({ contextMenuPage, page }) => {
        const dialogPromise = page.waitForEvent('dialog');
        page.on('dialog', dialog => dialog.accept());
        await contextMenuPage.rightClickOnContextArea();
        const dialog = await dialogPromise;
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('You selected a context menu');
    });
});