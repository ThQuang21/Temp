import { Locator, Page } from "@playwright/test";

export class Dropdown {
  readonly page: Page;
  readonly locator: Locator;

  constructor(page: Page, locator: Locator) {
    this.page = page;
    this.locator = locator;
  }

  async selectOption(optionName: string) {
    await this.locator.click();
    await this.locator.selectOption({ label: optionName });
    await this.page.waitForLoadState("networkidle");
  }
}
