import type { Page, Locator } from "@playwright/test";

export class Header {
    public readonly banner: Locator;
    public readonly mainNavigation: Locator;
    public readonly context: Locator;
    public readonly navbarMenu: Locator;
    public readonly homeLink: Locator;
    public readonly scheduleLink: Locator;
    public readonly activitiesLink: Locator;
    public readonly sponsorsLink: Locator;
    public readonly attendingLink: Locator;
    public readonly accommodationLink: Locator;
    public readonly ticketsLink: Locator;
    public readonly appsLink: Locator;
    public readonly logoLink: Locator;
    public readonly aboutNavLink: Locator;
    public readonly aboutLink: Locator;
    public readonly featuresLink: Locator;
    public readonly mapsLink: Locator;
    public readonly caseStudiesLink: Locator;
    public readonly membersLink: Locator;
    public readonly newsAndBlog: Locator;
    public readonly pluginsLink: Locator;
    public readonly visualChangelogLink: Locator;
    public readonly communityLink: Locator;
    public readonly getInvolvedLink: Locator;
    public readonly meetingsLink: Locator;
    public readonly certifiedMemberLink: Locator;
    public readonly qgisFoundationLink: Locator;
    public readonly projectOrganisationLink: Locator;
    public readonly userGroupLink: Locator;
    public readonly metricsLink: Locator;
    public readonly membersBlogLink: Locator;
    public readonly downloadLink: Locator;
    public readonly resourcesLink: Locator;
    public readonly documentationLink: Locator;
    public readonly resourcesHubLink: Locator;
    public readonly releasesLink: Locator;
    public readonly roadmapLink: Locator;
    public readonly reportsLink: Locator;
    public readonly booksLink: Locator;
    public readonly supportLink: Locator;
    public readonly blogLink: Locator;
    public readonly donateLink: Locator;
    public readonly searchInput: Locator;

    constructor(public readonly page: Page) {
        this.banner = this.page.getByRole("banner");
        this.mainNavigation = this.page.getByLabel("main navigation");
        this.context = this.page.locator('#context');
        this.navbarMenu = this.page.locator('#navbarMenu');
        this.homeLink = this.navbarMenu.getByRole('link', { name: 'Home' });
        this.scheduleLink = this.navbarMenu.getByRole('link', { name: 'Schedule' });
        this.activitiesLink = this.navbarMenu.getByRole('link', { name: 'Activities' });
        this.sponsorsLink = this.navbarMenu.getByRole('link', { name: 'Sponsors' });
        this.attendingLink = this.navbarMenu.getByRole('link', { name: 'Attending' });
        this.accommodationLink = this.navbarMenu.getByRole('link', { name: 'Accommodation' });
        this.ticketsLink = this.navbarMenu.getByRole('link', { name: 'Tickets' });
        this.appsLink = this.navbarMenu.getByRole('link', { name: 'Apps' });
        this.logoLink = this.mainNavigation.getByRole("link").first();
        this.aboutNavLink = this.navbarMenu.getByRole('link', { name: 'About' });
        this.aboutLink = this.mainNavigation
            .getByText("About", {
                exact: true,
            })
            .first();
        this.featuresLink = this.banner.getByRole("link", {
            name: "Features",
        }).first();
        this.mapsLink = this.banner.getByRole("link", {
            name: "Screenshots and Maps",
        });
        this.caseStudiesLink = this.banner.getByRole("link", {
            name: "Case studies",
        });
        this.newsAndBlog = this.banner.getByRole("link", {
            name: "News and Blog",
        });
        this.pluginsLink = this.mainNavigation.getByRole("link", {
            name: "Plugins",
        });
        this.visualChangelogLink = this.banner.getByRole("link", {
            name: "Past Releases (Changelog)",
        });
        this.roadmapLink = this.banner.getByRole("link", {
            name: "Future Releases (Roadmap)",
        });

        this.membersLink = this.banner.getByRole("link", {
            name: "Sustaining Members",
        });
        this.supportLink = this.banner.getByRole("link", {
            name: "Contact and Support",
        });
        this.communityLink = this.mainNavigation.getByText("Community");
        this.getInvolvedLink = this.mainNavigation.getByRole("link", {
            name: "Get involved",
        });
        this.meetingsLink = this.mainNavigation.getByRole("link", {
            name: "Meetings",
        });
        this.qgisFoundationLink = this.mainNavigation.getByRole("link", {
            name: "QGIS Foundation",
        });
        this.projectOrganisationLink = this.mainNavigation.getByRole("link", {
            name: "Project Organisation",
        });

        this.userGroupLink = this.mainNavigation.getByRole("link", {
            name: "Local User Groups",
        });

        this.metricsLink = this.mainNavigation.getByRole("link", {
            name: "QGIS Metrics",
        });
        this.membersBlogLink = this.mainNavigation.getByRole("link", {
            name: "Members Blog",
        });
        this.downloadLink = this.mainNavigation.getByRole("link", {
            name: "Download",
        });
        this.resourcesLink = this.mainNavigation.getByText("Resources", {
            exact: true,
        });
        this.documentationLink = this.mainNavigation.getByRole("link", {
            name: "Documentation",
        });
        this.resourcesHubLink = this.mainNavigation.getByRole("link", {
            name: "Resources Hub",
        });
        this.certifiedMemberLink = this.mainNavigation.getByRole("link", {
            name: "Certification Programme",
        });
        this.reportsLink = this.mainNavigation.getByRole("link", {
            name: "Compliance Reports",
        });
        this.booksLink = this.mainNavigation.getByRole("link", {
            name: "Books",
        });
        this.blogLink = this.mainNavigation.getByRole("link", { name: "Blog" });
        this.donateLink = this.mainNavigation.getByRole("link", {
            name: "Donate",
        });
        this.searchInput = this.mainNavigation.getByRole("searchbox", {name: "Search"});
    }
}
