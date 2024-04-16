import { test, expect } from "@playwright/test";
import SignupLoginPage from "../page-objects/SignupLoginPage";
import HomePage from "../page-objects/HomePage";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Successful auth tests", async () => {
  test("Sign in as standard user", async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const homePage = new HomePage(page);

    await signupLoginPage.navigateToPage("/login");
    await signupLoginPage.inputLoginData(
      "audrius.bertasius@testdevlab.com",
      "P@ssWord"
    );
    await signupLoginPage.clickLoginButton();
    await homePage.assertPageUrl("/");
  });
});

test.describe("Unsuccessful auth tests", async () => {
  test.beforeEach(async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    await signupLoginPage.navigateToPage("/login");
  });
  test("Sign in with incorect user data", async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const homePage = new HomePage(page);

    await signupLoginPage.inputLoginData(
      "audrius.bertasius@testdevlab.com",
      "IncorrectPass"
    );
    await signupLoginPage.clickLoginButton();

    await signupLoginPage.assertPageUrl("/login");
    await signupLoginPage.assertErrorMessageText(
      "Your email or password is incorrect!"
    );
  });
});
