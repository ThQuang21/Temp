import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base.page";

export class CartPage extends BasePage {
  readonly continueShoppingBtn: Locator;
  readonly checkoutBtn: Locator;
  readonly productList: Locator;
  constructor(page: Page) {
    super(page);
    this.continueShoppingBtn = page.getByRole("button", { name: "Continue Shopping" });
    this.continueShoppingBtn = page.getByRole("button", { name: "Checkout" });
    this.productList = page.locator(".cart_list");
  }

  async goBackToShopping() {
    await this.continueShoppingBtn.click();
  }

  async goToCheckOut() {
    await this.checkoutBtn.click();
  }

  async getNthProductInfo(nth: number) {
    const itemLocator = this.productList.locator(".cart_item_label").nth(nth);
    const price = await itemLocator.locator(".inventory_item_price").innerText();
    return {
      name: await itemLocator.locator(".inventory_item_name").textContent(),
      price: price.replace("$", ""),
    };
  }
}
