import type { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    private readonly url: string = "/";
    public readonly pageBody: Locator;
    // Define locators here

    public readonly textList: string[] = ["QGIS User Conference 2025"];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        // Add more locators here
    }

    async goto() {
        await this.page.goto(this.url);
    }
}
