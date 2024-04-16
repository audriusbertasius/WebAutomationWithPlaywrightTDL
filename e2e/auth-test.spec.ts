import test from "../fixtures/pages";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe("Successful auth tests", async () => {
  test("Sign in as standard user", async ({ signupLoginPage, homePage }) => {
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
  test.beforeEach(async ({ signupLoginPage, homePage }) => {
    await signupLoginPage.navigateToPage("/login");
  });
  test("Sign in with incorect user data", async ({
    signupLoginPage,
    homePage,
  }) => {
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
