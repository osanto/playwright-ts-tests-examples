import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class MainPage extends BasePage {
    constructor (page: Page) {
        super(page);
    }
}