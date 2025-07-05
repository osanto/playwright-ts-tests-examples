import { test as base } from '@playwright/test';
import { MainPage } from './pages/main-page';
import { ABTestingPage } from './pages/ab-testing-page';
import { AddRemoveElementsPage } from './pages/add-remove-elements-page';
import { CheckboxesPage } from './pages/checkboxes-page';
import { ContextMenuPage } from './pages/context-menu-page';
import { DropdownPage } from './pages/dropdown-page';
import { FileDownloadPage } from './pages/file-download-page'; 
import { FileUploadPage } from './pages/file-upload-page';
import { KeyPressesPage } from './pages/key-presses-page';
import { HoversPage } from './pages/hovers-page';

type Pages = {
    mainPage: MainPage;
    abTestingPage: ABTestingPage;
    addRemoveElementsPage: AddRemoveElementsPage;
    checkboxesPage: CheckboxesPage; 
    contextMenuPage: ContextMenuPage;
    dropdownPage: DropdownPage;
    fileDownloadPage: FileDownloadPage;
    fileUploadPage: FileUploadPage;
    keyPressesPage: KeyPressesPage;
    hoversPage: HoversPage;
}

export const test = base.extend<Pages>({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page);
        await use(mainPage);
    },
    abTestingPage: async ({ page }, use) => {
        const abTestingPage = new ABTestingPage(page);
        await use(abTestingPage);
    },
    addRemoveElementsPage: async ({ page }, use) => {
        const addRemoveElementsPage = new AddRemoveElementsPage(page);
        await use(addRemoveElementsPage);
    },
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
    contextMenuPage: async ({ page }, use) => {
        const contextMenuPage = new ContextMenuPage(page);
        await use(contextMenuPage);
    },
    dropdownPage: async ({ page }, use) => {
        const dropdownPage = new DropdownPage(page);
        await use(dropdownPage);
    },
    fileDownloadPage: async ({ page }, use) => {
        const fileDownloadPage = new FileDownloadPage(page);
        await use(fileDownloadPage);
    },
    fileUploadPage: async ({ page }, use) => {
        const fileUploadPage = new FileUploadPage(page);
        await use(fileUploadPage);
    },
    keyPressesPage: async ({ page }, use) => {
        const keyPressesPage = new KeyPressesPage(page);
        await use(keyPressesPage);
    },
    hoversPage: async ({ page }, use) => {
        const hoversPage = new HoversPage(page);
        await use(hoversPage);
    }
});