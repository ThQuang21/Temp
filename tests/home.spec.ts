import { test } from "../pages-objects/page-fixtures";
import homeData from "../data/home-data.json";

test.beforeEach(async ({ page }) => {
  await test.step("Navigate to Homepage", async () => {
    await page.goto("/inventory.html");
  });
});

test("Validate user can add and remove product at home page", { tag: "@regression" }, async ({ homePage }) => {
  let numOfProd: number;
  await test.step("Click add an product", async () => {
    numOfProd = await homePage.addProductToCart(homeData.product_to_add);
  });

  await test.step("Validate product is added", async () => {
    await homePage.header.validateCartBadge(numOfProd);
  });

  await test.step("Click remove previous added product", async () => {
    numOfProd = await homePage.removeProductFromCart(homeData.product_to_add, numOfProd);
  });

  await test.step("Validate product is removed", async () => {
    await homePage.header.validateCartBadge(numOfProd);
  });
});

test("Validate user can sort the products by its price", { tag: "@regression" }, async ({ homePage }) => {
  await test.step("Select sort by price asc", async () => {
    await homePage.productSort.selectOption(homeData.price_low_to_high);
  });

  await test.step("Verify failed and validate message", async () => {
    await homePage.validateProductIsSortByPrice(true);
  });

  await test.step("Select sort by price desc", async () => {
    await homePage.productSort.selectOption(homeData.price_high_to_low);
  });

  await test.step("Verify failed and validate message", async () => {
    await homePage.validateProductIsSortByPrice(false);
  });
});
