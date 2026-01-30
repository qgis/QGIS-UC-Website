import type { Page, Locator, expect } from "@playwright/test";

export class HomePage {
    private readonly url: string = "/";
    public readonly pageBody: Locator;
    public readonly conferenceLogo: Locator;
    public readonly conferenceHeading: Locator;
    public readonly secondImage: Locator;
    public readonly dateText: Locator;
    public readonly calendarLink: Locator;
    public readonly sidebarColumn: Locator;
    public readonly welcomeText: Locator;
    public readonly sidebar: Locator;
    public readonly sidebarHomeLink: Locator;
    public readonly sidebarAboutLink: Locator;
    public readonly sidebarScheduleLink: Locator;
    public readonly sidebarActivitiesLink: Locator;
    public readonly sidebarSponsorsLink: Locator;
    public readonly sidebarAttendingLink: Locator;
    public readonly sidebarAccommodationLink: Locator;
    public readonly sidebarTicketsLink: Locator;
    public readonly sidebarAppsLink: Locator;

    public readonly textList: string[] = ["QGIS User Conference 2025"];

    constructor(public readonly page: Page) {
        this.pageBody = this.page.locator("body");
        this.conferenceLogo = this.page.getByRole('img', { name: 'Conference logo' });
        this.conferenceHeading = this.page.getByRole('heading', { name: 'QGIS User Conference' });
        this.secondImage = this.page.getByRole('img').nth(1);
        this.dateText = this.page.getByText('5-6 October 2026, LAAX,');
        this.calendarLink = this.page.getByRole('link', { name: 'Add to your Calendar' });
        this.sidebarColumn = this.page.locator('.column.is-3');
        this.welcomeText = this.page.getByText('Welcome to the Swiss Alps! ¶ The QGIS User Conference is an annual event that');
        this.sidebar = this.page.locator('#sidebar');
        this.sidebarHomeLink = this.sidebar.getByRole('link', { name: 'Home' });
        this.sidebarAboutLink = this.sidebar.getByRole('link', { name: 'About' });
        this.sidebarScheduleLink = this.sidebar.getByRole('link', { name: 'Schedule' });
        this.sidebarActivitiesLink = this.sidebar.getByRole('link', { name: 'Activities' });
        this.sidebarSponsorsLink = this.sidebar.getByRole('link', { name: 'Sponsors' });
        this.sidebarAttendingLink = this.sidebar.getByRole('link', { name: 'Attending' });
        this.sidebarAccommodationLink = this.sidebar.getByRole('link', { name: 'Accommodation' });
        this.sidebarTicketsLink = this.sidebar.getByRole('link', { name: 'Tickets' });
        this.sidebarAppsLink = this.sidebar.getByRole('link', { name: 'Apps' });
    }

    async goto() {
        await this.page.goto(this.url);
    }
}
