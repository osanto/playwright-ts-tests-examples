import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Add/Remove Elements page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`add_remove_elements/`);
    });

    test('Verify page elements', async ({ addRemoveElementsPage }) => {
        const header = await addRemoveElementsPage.getPageHeader();
        const addElementButton = addRemoveElementsPage.getAddElementButton();
        const deleteElementButtons = addRemoveElementsPage.getDeleteElementButtons();

        expect(header).toEqual('Add/Remove Elements');
        expect(addElementButton).toHaveText('Add Element');
        expect(addElementButton).toHaveCount(1);
        expect(deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of an element', async ({ addRemoveElementsPage }) => {
        const deleteElementButtons = addRemoveElementsPage.getDeleteElementButtons();

        // Add an element
        await addRemoveElementsPage.clickAddElementButton();
        await expect(deleteElementButtons).toHaveCount(1);
        await expect(deleteElementButtons).toHaveText('Delete');

        // Remove the added element
        await addRemoveElementsPage.clickDeleteElementButton();
        await expect(deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of multiple elements', async ({ addRemoveElementsPage }) => {
        const addButtonCount = 5;

        // Add multiple elements
        for (let i = 0; i < addButtonCount; i++) {
            await addRemoveElementsPage.clickAddElementButton();
        }

        // Verify that 5 delete buttons are present
        const deleteButtons = addRemoveElementsPage.getDeleteElementButtons();
        await expect(deleteButtons).toHaveCount(addButtonCount);

        // Remove all added elements
        for (let i = 0; i < addButtonCount; i++) {
            await deleteButtons.nth(0).click(); 
            await expect(deleteButtons).toHaveCount(addButtonCount - i - 1); 
        }
    });
});