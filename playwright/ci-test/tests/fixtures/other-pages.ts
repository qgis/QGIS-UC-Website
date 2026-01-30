import type { Page, Locator } from "@playwright/test";

export class AboutPage {
    private readonly url: string = "/about";
    public readonly pageBody: Locator;
    public readonly aboutText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.aboutText = this.page.getByText('About ¶ The conference');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class SchedulePage {
    private readonly url: string = "/schedule";
    public readonly pageBody: Locator;
    public readonly scheduleText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.scheduleText = this.page.getByText('Schedule ¶ This page provides');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class ActivitiesPage {
    private readonly url: string = "/activities";
    public readonly pageBody: Locator;
    public readonly activitiesText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.activitiesText = this.page.getByText('Activities ¶ In addition to');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class SponsorsPage {
    private readonly url: string = "/sponsors";
    public readonly pageBody: Locator;
    public readonly organizersText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.organizersText = this.page.getByText('Organizers ¶ OPENGIS.ch QGIS');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class AttendingPage {
    private readonly url: string = "/attending";
    public readonly pageBody: Locator;
    public readonly attendingText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.attendingText = this.page.getByText('Attending ¶ Quick facts ¶');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class AccommodationPage {
    private readonly url: string = "/accommodation";
    public readonly pageBody: Locator;
    public readonly accommodationText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.accommodationText = this.page.getByText('Accommodation ¶ Participants');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}

export class AppsPage {
    private readonly url: string = "/apps";
    public readonly pageBody: Locator;
    public readonly appsText: Locator;

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.appsText = this.page.getByText('Apps ¶ Signal ¶ For');
    }

    async goto() {
        await this.page.goto(this.url);
    }
}
