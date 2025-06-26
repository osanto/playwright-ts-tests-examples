import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Dropdown page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`dropdown`);
    });
    
    test('Verify page elements', async ({ dropdownPage }) => {
        const headerText = await dropdownPage.getPageHeader();
        const dropdownElement = dropdownPage.dropdownElement;
        const dropdownOptions = dropdownPage.dropdownOptions;

        expect(headerText).toBe('Dropdown List');
        await expect.soft(dropdownElement).toBeVisible();
        await expect.soft(dropdownOptions).toHaveCount(3);
        await expect.soft(dropdownOptions.first()).toHaveText('Please select an option');
    });

    test('Verify dropdown options in DOM', async ({ dropdownPage }) => {
        const dropdownOptions = dropdownPage.dropdownOptions;
        await expect(dropdownOptions).toHaveCount(3);

        const options = await dropdownOptions.allTextContents();
        expect(options).toEqual(['Please select an option', 'Option 1', 'Option 2']);
    });

    test('Verify dropdown selection', async ({ dropdownPage }) => {
        await dropdownPage.selectOptionByValue('1');
        await expect(dropdownPage.dropdownElement).toHaveValue('1');

        const selectedOption = dropdownPage.getSelectedOption();
        await expect(selectedOption).toHaveText('Option 1');
  
    });
});
