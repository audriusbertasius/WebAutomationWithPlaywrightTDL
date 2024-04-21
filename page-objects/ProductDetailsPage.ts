import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class ProductDetailsPage extends BasePage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addToCartButton = this.page.getByRole('button', { name: ' Add to cart' });
  }

  async addToCart() {
  await this.clickButton(this.addToCartButton);
  }
}
