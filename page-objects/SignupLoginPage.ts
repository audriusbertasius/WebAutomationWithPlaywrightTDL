import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class SignupLoginPage extends BasePage {
  readonly page: Page;
  readonly emailAddress: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.emailAddress = this.page.getByTestId("login-email");
    this.passwordInput = this.page.getByTestId("login-password");
    this.loginButton = this.page.getByTestId("login-button");
  }

  async inputLoginData(username: string, password: string) {
    await this.emailAddress.fill(username);
    await this.passwordInput.fill(password);
  }
  async clickLoginButton() {
    await this.clickButton(this.loginButton);
  }

  async assertErrorMessageText(messageText: string) {
    expect(this.page.getByText(messageText)).toBeVisible();
  }
}
