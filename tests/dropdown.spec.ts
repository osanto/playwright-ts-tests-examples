import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Dropdown page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`dropdown`);
    });
    
    test('Verify page elements', async ({ dropdownPage }) => {
        const headerText = await dropdownPage.getPageHeader();
        const dropdownElement = dropdownPage.dropdown;

        expect(headerText).toBe('Dropdown List');
        await expect(dropdownElement).toBeVisible();
    });
});
