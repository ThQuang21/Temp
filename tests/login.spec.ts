import { test } from "../pages-objects/page-fixtures";
import loginData from "../data/login-data.json";
import * as Constant from "../utilities/constants";

test.beforeEach(async ({ page }) => {
  await test.step("Navigate to LoginPage", async () => {
    await page.goto("/");
  });
});

test("Verify that user can log in with valid user", { tag: "@regression" }, async ({ loginPage, homePage, page }) => {
  await test.step("Input valid credentials and login", async () => {
    await loginPage.inputUsername(loginData.valid_username);
    await loginPage.inputPassword(loginData.password);
    await loginPage.clickLogin();
  });

  await test.step("Validate user logged in successfully", async () => {
    await homePage.validateLoginSuccess();
  });

  await test.step("Store login session", async () => {
    await page.context().storageState({ path: Constant.AuthFile.STANDARD_USER });
  });
});

test("Validate user cannot logged in with locked user", { tag: "@regression" }, async ({ loginPage }) => {
  await test.step("Login in with invalid account", async () => {
    await loginPage.inputUsername(loginData.locked_out_username);
    await loginPage.inputPassword(loginData.password);
    await loginPage.clickLogin();
  });

  await test.step("Verify failed and validate message", async () => {
    await loginPage.validateErrorMsg(Constant.LoginMessageConstant.LOCKED_OUT);
  });
});
