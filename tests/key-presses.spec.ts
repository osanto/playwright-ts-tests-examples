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

    test('Verify key presses', async ({ keyPressesPage }) => {
        const keys = ['H', '1', 'Shift', 'Space', 'Tab', 'Escape'];

        for (const key of keys) {
            await keyPressesPage.inputArea.press(key);
            
            await expect(keyPressesPage.enteredKey).toHaveText(`You entered: ${key.toUpperCase()}`);
        }
    });

    test('Verify key presses with enter clears input', async ({ keyPressesPage }) => {
        const key = 'Enter';

        await keyPressesPage.inputArea.press(key);

        await expect(keyPressesPage.inputArea).toHaveValue('');
        await expect(keyPressesPage.enteredKey).not.toBeVisible();
    });
});