import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly loginFailMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.loginFailMsg = page.locator('[data-test="error"]');
  }

  async inputUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async inputPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginBtn.click();
  }

  async validateErrorMsg(msg: string) {
    await expect(this.loginFailMsg).toHaveText(msg);
  }
}
