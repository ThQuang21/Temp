import { test as base } from "@playwright/test";
import { HomePage } from "./pages/home.page";
import { LoginPage } from "./pages/login.page";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type PageObject = {
  loginPage: LoginPage;
  homePage: HomePage;
};

export const test = base.extend<PageObject>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});

export { expect, Page, Locator } from "@playwright/test";
