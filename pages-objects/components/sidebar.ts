import { Locator, Page } from "@playwright/test";

export class SideBar {
  readonly page: Page;
  readonly SideBar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.SideBar = page.getByRole("navigation");
  }

  async goToItem(itemName: string) {
    await this.SideBar.getByText(itemName).click();
  }
}
