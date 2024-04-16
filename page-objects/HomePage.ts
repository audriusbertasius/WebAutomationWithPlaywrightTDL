import { Page, Locator, expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class ProductsPage extends BasePage {
  readonly page: Page;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.pageTitle = this.page.getByTestId("title");
  }

  async assertPageTitleText(titleText: string) {
    await this.assertText(this.pageTitle, titleText);
  }
}
