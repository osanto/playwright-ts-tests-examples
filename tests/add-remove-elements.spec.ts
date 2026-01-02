import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Add/Remove Elements page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`add_remove_elements/`);
    });

    test('Verify page elements', async ({ addRemoveElementsPage }) => {
        await expect(addRemoveElementsPage.pageHeader).toHaveText('Add/Remove Elements');
        await expect(addRemoveElementsPage.addElementButton).toHaveText('Add Element');
        await expect(addRemoveElementsPage.addElementButton).toHaveCount(1);
        await expect(addRemoveElementsPage.deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of an element', async ({ addRemoveElementsPage }) => {
        // Add an element
        await addRemoveElementsPage.addElementButton.click();
        await expect(addRemoveElementsPage.deleteElementButtons).toHaveCount(1);
        await expect(addRemoveElementsPage.deleteElementButtons).toHaveText('Delete');

        // Remove the added element
        await addRemoveElementsPage.deleteElementButtons.click();
        await expect(addRemoveElementsPage.deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of multiple elements', async ({ addRemoveElementsPage }) => {
        const addButtonCount = 5;

        // Add multiple elements
        for (let i = 0; i < addButtonCount; i++) {
            await addRemoveElementsPage.addElementButton.click();
        }

        // Verify that 5 delete buttons are present
        await expect(addRemoveElementsPage.deleteElementButtons).toHaveCount(addButtonCount);

        // Remove all added elements
        for (let i = 0; i < addButtonCount; i++) {
            await addRemoveElementsPage.deleteElementButtons.nth(0).click(); 
            await expect(addRemoveElementsPage.deleteElementButtons).toHaveCount(addButtonCount - i - 1); 
        }
    });
});