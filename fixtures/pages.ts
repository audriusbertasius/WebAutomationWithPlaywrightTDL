import { test as baseTest } from "@playwright/test";
import BasePage from "../page-objects/BasePage";
import HomePage from "../page-objects/HomePage";
import ProductsPage from "../page-objects/ProductsPage";
import CartPage from "../page-objects/CartPage";
import SignupLoginPage from "../page-objects/SignupLoginPage";
import ProductDetailsPage from "../page-objects/ProductDetailsPage";
import CheckOutPage from "../page-objects/CheckOutPage";
import PaymentPage from "../page-objects/PaymentPage";

type Pages = {
  basePage: BasePage;
  homePage: HomePage;
  productsPage: ProductsPage;
  cartPage: CartPage;
  signupLoginPage: SignupLoginPage;
  productDetailsPage: ProductDetailsPage;
  checkOutPage: CheckOutPage;
  paymentPage:PaymentPage;
};

const test = baseTest.extend<Pages>({
  basePage: async ({ page }, use) => await use(new BasePage(page)),
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  productsPage: async ({ page }, use) => await use(new ProductsPage(page)),
  cartPage: async ({ page }, use) => await use(new CartPage(page)),
  signupLoginPage: async ({ page }, use) => await use(new SignupLoginPage(page)),
  productDetailsPage: async ({ page }, use) => await use(new ProductDetailsPage(page)),
  checkOutPage: async ({ page }, use) => await use(new CheckOutPage(page)),
  paymentPage: async ({ page }, use) => await use(new PaymentPage(page)),
});

export default test;
