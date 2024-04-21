import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly productNames: Locator;
  readonly cartPrice: Locator;
  readonly cartTotalPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.productNames = this.page.locator('td.cart_description>>h4>>a');
    this.cartPrice = this.page.locator('td.cart_price>>p');
    this.cartTotalPrice = this.page.locator('td.cart_total>>p');
  }

  async verifyProductNameInChart(productName: string) {
    await expect(this.productNames).toContainText(productName);
  }

  async verifyProductPrice(productPrice: string) {
    await expect(this.cartPrice).toContainText(productPrice);
  }

  async verifyProductTotalPrice(productTotalPrice: string) {
    await expect(this.cartTotalPrice).toContainText(productTotalPrice);
  }
}
