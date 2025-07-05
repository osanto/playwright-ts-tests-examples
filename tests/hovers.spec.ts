import { test } from '../fixture-pages';
import { expect } from '@playwright/test';

test.describe('Hovers page', () => {
    test.beforeEach(async ({ mainPage }) => {
        await mainPage.navigateTo(`hovers`);
    });

    test('Verify page elements', async ({ hoversPage }) => {
        await expect(hoversPage.pageHeader).toHaveText('Hovers');
        await expect(hoversPage.description).toHaveText('Hover over the image for additional information');
        await expect(hoversPage.images).toHaveCount(3);
    });

    test('Verify on hover the user name and link appears', async ({ hoversPage }) => {
        const imageCount = await hoversPage.images.count();

        for (let i = 0; i < imageCount; i++) {
            await expect(hoversPage.getCaption(i)).toBeHidden();

            await hoversPage.hoverOverImage(i);
            await expect(hoversPage.getCaption(i)).toBeVisible();
            await expect(hoversPage.getUserName(i)).toHaveText(`name: user${i + 1}`);

            const userLink = hoversPage.getUserLink(i);
            await expect(userLink).toHaveText('View profile');
            await expect(userLink).toHaveAttribute('href', `/users/${i + 1}`);

            await hoversPage.page.mouse.move(0, 0); 
            await expect(hoversPage.getCaption(i)).toBeHidden();
        }
    });
});