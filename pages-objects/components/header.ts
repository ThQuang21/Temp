import { expect, Locator, Page } from "@playwright/test";

export class Header {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly hamburgerIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator("#shopping_cart_container");
    this.hamburgerIcon = page.locator("#react-burger-menu-btn");
    this.cartBadge = page.locator(".shopping_cart_badge");
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async openSidebar() {
    await this.hamburgerIcon.click();
  }

  async validateCartBadge(numOfProducts: number) {
    if (numOfProducts) {
      await expect(this.cartBadge).toHaveText(numOfProducts.toString());
    } else {
      await expect(this.cartBadge).not.toBeVisible();
    }
  }

  async validateHeaderIsVisible() {
    await expect(this.cartIcon).toBeVisible();
    await expect(this.cartIcon).toBeVisible();
  }
}
