import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class PaymentPage extends BasePage {
  readonly page: Page;
  readonly nameOnCard: Locator;
  readonly cardNumber: Locator;
  readonly cvc: Locator
  readonly expiryMonth: Locator
  readonly expiryYear: Locator
  readonly payButton: Locator

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.nameOnCard = this.page.getByTestId("name-on-card");
    this.cardNumber = this.page.getByTestId("card-number");
    this.cvc = this.page.getByTestId("cvc");
    this.expiryMonth = this.page.getByTestId("expiry-month");
    this.expiryYear = this.page.getByTestId("expiry-year");
    this.payButton = this.page.getByTestId("pay-button");
    
  }

  async enterPaymentDetails(cardName: string, cardNumber: string, cvc: string, expiryMonth: string, expiryYear: string) {
        await this.nameOnCard.fill(cardName);
        await this.cardNumber.fill(cardNumber);
        await this.cvc.fill(cvc);
        await this.expiryMonth.fill(expiryMonth);
        await this.expiryYear.fill(expiryYear);
  }

  async clickPayButton() {
    await this.clickButton(this.payButton);
    }
}
