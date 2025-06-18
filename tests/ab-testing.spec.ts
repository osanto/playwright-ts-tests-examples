import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { ABTestingPage } from '../pages/ab-testing-page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigateTo(`abtest`);
});

test('verify A/B Testing page content', async ({ page }) => {
  const header = ['A/B Test Control', 'A/B Test Variation 1'];
  const text = 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).';

  await expect(page).toHaveTitle(/The Internet/);

  const abTestingPage = new ABTestingPage(page);
  expect(header).toContain(await abTestingPage.getPageHeader());
  expect(await abTestingPage.getContentText()).toEqual(text);
});

