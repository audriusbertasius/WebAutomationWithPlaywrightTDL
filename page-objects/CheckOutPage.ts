import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";


export default class CheckOutPage extends BasePage {
  readonly page: Page;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.placeOrderButton = this.page.getByText("Proceed To Checkout");
  }

  async clickPlaceOrder() {
    await this.clickButton(this.placeOrderButton);
  }
}