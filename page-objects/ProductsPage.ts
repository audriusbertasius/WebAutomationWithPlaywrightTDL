import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly menThirtsProductHeading: Locator;
  readonly menCategory: Locator;
  readonly filterTshirts: Locator;
  readonly addToCartByproductName: Locator;
  readonly addedToCartMessage: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.menThirtsProductHeading = this.page.getByRole("heading", {
      name: "Men - Tshirts Products",
    });
    this.menCategory = this.page.getByRole("link", { name: " Men" });
    this.filterTshirts = this.page.getByRole("link", { name: "Tshirts" });
    this.addToCartByproductName = this.page.locator('.choose > .nav > li > a').first();
    //  "//p[text()='Men Tshirt']//parent::div//child::a");
    this.addedToCartMessage = this.page.getByText(
      "Your product has been added to cart."
    );
    this.viewCartLink = page.getByRole("link", { name: "View Cart" });
  }

  async selectMenCategory() {
    await this.clickButton(this.menCategory);
  }

  async filterProductsByTshirts() {
    await this.clickButton(this.filterTshirts);
  }

  async verifyMenTshirtsProductCategoryHeading() {
    await this.verifyIsVisible(this.menThirtsProductHeading);
  }

  async addToCartByProductName() {
    await this.clickButton(this.addToCartByproductName);
  }

  async verifyMessageProductAddedToTheCart() {
    await this.verifyIsVisible(this.addedToCartMessage);
  }

  async goToViewCart() {
    await this.clickButton(this.viewCartLink);
  }
}
