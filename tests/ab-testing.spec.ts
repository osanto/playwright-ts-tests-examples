import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('A/B Testing page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo('abtest');
    });

    test('Verify page content', async ({ abTestingPage }) => {
        const text = 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).';

        await expect(abTestingPage.pageHeader).toHaveText(/A\/B Test (Control|Variation 1)/);
        await expect(abTestingPage.contentText).toHaveText(text);
    });
});

