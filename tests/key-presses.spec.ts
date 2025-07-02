import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Key Presses page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`key_presses`);
    });

    test('Verify page elements', async ({ keyPressesPage }) => {
        await expect(keyPressesPage.pageHeader).toHaveText('Key Presses');

        await expect(keyPressesPage.description).toBeVisible();
        await expect(keyPressesPage.description).toHaveText('Key presses are often used to interact with a website (e.g., tab order, enter, escape, etc.). Press a key and see what you inputted.');
        await expect(keyPressesPage.inputArea).toBeVisible();
    });
});