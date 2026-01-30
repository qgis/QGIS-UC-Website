import { test as base, expect } from "@playwright/test";
import { Header } from "./fixtures/header";
import { Footer } from "./fixtures/footer";
import {
    AboutPage,
    SchedulePage,
    ActivitiesPage,
    SponsorsPage,
    AttendingPage,
    AccommodationPage,
    AppsPage,
} from "./fixtures/other-pages";

type OtherPagesFixtures = {
    header: Header;
    footer: Footer;
    aboutPage: AboutPage;
    schedulePage: SchedulePage;
    activitiesPage: ActivitiesPage;
    sponsorsPage: SponsorsPage;
    attendingPage: AttendingPage;
    accommodationPage: AccommodationPage;
    appsPage: AppsPage;
};

const test = base.extend<OtherPagesFixtures>({
    header: async ({ page }, use) => {
        const header = new Header(page);
        await use(header);
    },
    footer: async ({ page }, use) => {
        const footer = new Footer(page);
        await use(footer);
    },
    aboutPage: async ({ page }, use) => {
        const aboutPage = new AboutPage(page);
        await use(aboutPage);
    },
    schedulePage: async ({ page }, use) => {
        const schedulePage = new SchedulePage(page);
        await use(schedulePage);
    },
    activitiesPage: async ({ page }, use) => {
        const activitiesPage = new ActivitiesPage(page);
        await use(activitiesPage);
    },
    sponsorsPage: async ({ page }, use) => {
        const sponsorsPage = new SponsorsPage(page);
        await use(sponsorsPage);
    },
    attendingPage: async ({ page }, use) => {
        const attendingPage = new AttendingPage(page);
        await use(attendingPage);
    },
    accommodationPage: async ({ page }, use) => {
        const accommodationPage = new AccommodationPage(page);
        await use(accommodationPage);
    },
    appsPage: async ({ page }, use) => {
        const appsPage = new AppsPage(page);
        await use(appsPage);
    },
});

test.describe("About page", () => {
    test.beforeEach(async ({ aboutPage }) => {
        await aboutPage.goto();
    });

    test("Content", async ({ aboutPage }) => {
        await expect(aboutPage.aboutText).toBeVisible();
    });
});

test.describe("Schedule page", () => {
    test.beforeEach(async ({ schedulePage }) => {
        await schedulePage.goto();
    });

    test("Content", async ({ schedulePage }) => {
        await expect(schedulePage.scheduleText).toBeVisible();
    });
});

test.describe("Activities page", () => {
    test.beforeEach(async ({ activitiesPage }) => {
        await activitiesPage.goto();
    });

    test("Content", async ({ activitiesPage }) => {
        await expect(activitiesPage.activitiesText).toBeVisible();
    });
});

test.describe("Sponsors page", () => {
    test.beforeEach(async ({ sponsorsPage }) => {
        await sponsorsPage.goto();
    });

    test("Content", async ({ sponsorsPage }) => {
        await expect(sponsorsPage.organizersText).toBeVisible();
    });
});

test.describe("Attending page", () => {
    test.beforeEach(async ({ attendingPage }) => {
        await attendingPage.goto();
    });

    test("Content", async ({ attendingPage }) => {
        await expect(attendingPage.attendingText).toBeVisible();
    });
});

test.describe("Accommodation page", () => {
    test.beforeEach(async ({ accommodationPage }) => {
        await accommodationPage.goto();
    });

    test("Content", async ({ accommodationPage }) => {
        await expect(accommodationPage.accommodationText).toBeVisible();
    });
});

test.describe("Apps page", () => {
    test.beforeEach(async ({ appsPage }) => {
        await appsPage.goto();
    });

    test("Content", async ({ appsPage }) => {
        await expect(appsPage.appsText).toBeVisible();
    });
});
