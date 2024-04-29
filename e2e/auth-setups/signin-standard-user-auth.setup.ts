import { expect, test as setup } from "@playwright/test";
import SignupLoginPage from "../../page-objects/SignupLoginPage";
import HomePage from "../../page-objects/HomePage";

const authFile = ".auth/standard-user-auth.json";

setup("Sign in as standard user", async ({ page }) => {
  const signupLoginPage = new SignupLoginPage(page);
  const homePage = new HomePage(page);

  await signupLoginPage.navigateToPage("/login");
  await signupLoginPage.inputLoginData(
    "audrius.bertasius@testdevlab.com",
    "P@ssWord"
  );
  await signupLoginPage.clickLoginButton();
  await expect(page.getByText("Logged in as Audrius")).toBeVisible();
  await homePage.assertPageUrl("/");

  await page.context().storageState({ path: authFile });
});
