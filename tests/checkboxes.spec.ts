import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Checkboxes page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`checkboxes`);
    });

    test('Verify page elements', async ({ checkboxesPage }) => {
        await expect(checkboxesPage.pageHeader).toHaveText('Checkboxes');
        const firstCheckbox = checkboxesPage.firstCheckbox;
        const secondCheckbox = checkboxesPage.secondCheckbox;

        await expect(firstCheckbox).not.toBeChecked();
        await expect(secondCheckbox).toBeChecked();
    });

    test('Verify checkbox interactions', async ({ checkboxesPage }) => {
        const firstCheckbox = checkboxesPage.firstCheckbox;
        const secondCheckbox = checkboxesPage.secondCheckbox;

        // Check the first checkbox
        await firstCheckbox.check();
        await expect(firstCheckbox).toBeChecked();
        await expect(secondCheckbox).toBeChecked();

        // Uncheck the second checkbox
        await secondCheckbox.uncheck();
        await expect(firstCheckbox).toBeChecked();
        await expect(secondCheckbox).not.toBeChecked();
    });
});