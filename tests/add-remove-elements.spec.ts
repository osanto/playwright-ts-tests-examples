import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { AddRemoveElementsPage } from '../pages/add-remove-elements-page';

test.describe('Add/Remove Elements page', () => {
    test.beforeEach(async ({ page }) => {
      const mainPage = new MainPage(page);
      await mainPage.navigateTo(`add_remove_elements/`);
    });

    test('Verify page elements', async ({ page }) => {
        const addRemoveElementsPage = new AddRemoveElementsPage(page);

        const header = await addRemoveElementsPage.getPageHeader();
        const addElementButton = addRemoveElementsPage.getAddElementButton();
        const deleteElementButtons = addRemoveElementsPage.getDeleteElementButtons();

        expect(header).toEqual('Add/Remove Elements');
        expect(addElementButton).toHaveText('Add Element');
        expect(addElementButton).toHaveCount(1);
        expect(deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of an element', async ({ page }) => {
        const addRemoveElementsPage = new AddRemoveElementsPage(page);
        const deleteElementButtons = addRemoveElementsPage.getDeleteElementButtons();

        // Add an element
        await addRemoveElementsPage.clickAddElementButton();
        await expect(deleteElementButtons).toHaveCount(1);
        await expect(deleteElementButtons).toHaveText('Delete');

        // Remove the added element
        await addRemoveElementsPage.clickDeleteElementButton();
        await expect(deleteElementButtons).toHaveCount(0);
    });

    test('Verify adding and deleting of multiple elements', async ({ page }) => {
        const addRemoveElementsPage = new AddRemoveElementsPage(page);
        const addButtonCount = 5;

        // Add multiple elements
        for (let i = 0; i < addButtonCount; i++) {
            await addRemoveElementsPage.clickAddElementButton();
        }

        // Verify that 5 delete buttons are present
        await expect(addRemoveElementsPage.getDeleteElementButtons()).toHaveCount(addButtonCount);

        // Remove all added elements
        const deleteButtons = addRemoveElementsPage.getDeleteElementButtons();
        for (let i = 0; i < addButtonCount; i++) {
            await deleteButtons.nth(0).click(); 
            await expect(deleteButtons).toHaveCount(addButtonCount - i - 1); 
        }
    });
});