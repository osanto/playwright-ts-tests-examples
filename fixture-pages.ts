import { test as base } from '@playwright/test';
import { MainPage } from './pages/main-page';
import { ABTestingPage } from './pages/ab-testing-page';
import { AddRemoveElementsPage } from './pages/add-remove-elements-page';

type Pages = {
    mainPage: MainPage;
    abTestingPage: ABTestingPage;
    addRemoveElementsPage: AddRemoveElementsPage;
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
    }
});