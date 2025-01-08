import type { Page, Locator } from "@playwright/test";

export class Footer {
    public readonly banner: Locator;
    private readonly liElement: Locator;
    public readonly conferenceLink: Locator;
    public readonly aboutLink: Locator;
    public readonly attendingLink: Locator;
    public readonly fundingList: Locator;
    public readonly logoImage: Locator;
    public readonly facebookLink: Locator;
    public readonly youtubeLink: Locator;
    public readonly mapstodonLink: Locator;
    public readonly ghLink: Locator;
    public readonly mailLink: Locator;

    constructor(public readonly page: Page) {
        this.banner = this.page.getByRole("contentinfo");
        this.liElement = this.page.locator("li");
        this.conferenceLink = this.liElement
            .filter({ hasText: "Conference" })
            .first();
        this.aboutLink = this.liElement.filter({ hasText: "About" });
        this.attendingLink = this.liElement.filter({ hasText: "Attending" });

        this.logoImage = this.page.getByRole("img", { name: "Logo" });
        this.facebookLink = this.page.getByRole("link", { name: "" });
        this.youtubeLink = this.page.getByRole("link", { name: "" });
        this.mapstodonLink = this.page
            .locator("div:nth-child(2) > div:nth-child(2) > a:nth-child(4)")
            .first();
        this.ghLink = this.page.getByRole("link", { name: "" });
        this.mailLink = this.page.getByRole("link", { name: "" });
    }
}
