import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "../base.page";
import { Dropdown } from "../components/dropdown";
import { isSorted } from "../../utilities/helper";

export class HomePage extends BasePage {
  readonly itemCard: Locator;
  readonly productSort: Dropdown;
  constructor(page: Page) {
    super(page);
    this.itemCard = page.locator('[data-test = "inventory-item"]');
    this.productSort = new Dropdown(page, page.getByRole("combobox"));
  }

  async goToProduct(productName: string) {
    await this.itemCard.getByText(productName).click();
  }

  async addProductToCart(productName: string, currentNumOfItem = 0) {
    await this.itemCard.filter({ hasText: productName }).getByRole("button", { name: "Add to cart" }).click();
    return currentNumOfItem + 1;
  }

  async removeProductFromCart(productName: string, currentNumOfItem: number) {
    await this.itemCard.filter({ hasText: productName }).getByRole("button", { name: "Remove" }).click();
    return currentNumOfItem - 1;
  }

  async validateLoginSuccess() {
    await this.header.validateHeaderIsVisible();
  }

  async validateProductIsSortByPrice(isASC: boolean) {
    const priceListLocator = this.page.locator(".inventory_item_price");
    const priceList: number[] = [];
    const totalProd = await priceListLocator.count();
    for (let i = 0; i < totalProd; i++) {
      const text = await priceListLocator.nth(i).innerText();
      const value = Number(text.replace("$", ""));
      priceList.push(value);
    }
    if (isASC) {
      expect(isSorted(priceList, "asc")).toBeTruthy();
    } else {
      expect(isSorted(priceList, "desc")).toBeTruthy();
    }
  }
}
