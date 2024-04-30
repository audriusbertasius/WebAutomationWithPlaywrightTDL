import { expect } from "@playwright/test";
import test from "../fixtures/pages";

const NAME_ON_CARD = 'Audrius Ber';
const CARD_NUMBER = '1111222233334444';
const CVC = 'Audrius Ber';
const EXPIRY_MONTH = '09';
const EXPIRY_YEAR = '2029';

test.describe("Cart add in and checkout flow with a successful purchase", async () => {
  test("Add item to cart and assert that the correct item with the correct price is shown in the cart", async ({
    cartPage,
    productsPage,
    productDetailsPage,
    checkOutPage,
    paymentPage,
  }) => {

    await productsPage.navigateToPage("/products");
    await productsPage.selectMenCategory();
    await productsPage.filterProductsByTshirts();
    await productsPage.verifyMenTshirtsProductCategoryHeading();
    await productsPage.addToCartByProductName(); //add straight to cart
    //await productDetailsPage.addToCart();
    await productsPage.verifyMessageProductAddedToTheCart();
    await productsPage.goToViewCart();
    
    await cartPage.assertPageUrl("/view_cart");
    await cartPage.verifyProductNameInChart("Men Tshirt");
    await cartPage.verifyProductPrice("Rs. 400");
    await cartPage.verifyProductTotalPrice("Rs. 400");
    await cartPage.proceedToCheckOut();
    await cartPage.assertPageUrl("/checkout");
    await checkOutPage.clickPlaceOrder();
    await cartPage.verifyProductNameInChart("Men Tshirt");
    await cartPage.verifyProductTotalPrice("Rs. 400");

    await paymentPage.enterPaymentDetails(NAME_ON_CARD,CARD_NUMBER,CVC,EXPIRY_MONTH,EXPIRY_YEAR);
    await paymentPage.clickPayButton();
    await paymentPage.assertPageUrl("/payment");
    await paymentPage.verifySuccessfullPayment();
    await paymentPage.clickContinueButton();
    await paymentPage.assertPageUrl("/");
  });
});
