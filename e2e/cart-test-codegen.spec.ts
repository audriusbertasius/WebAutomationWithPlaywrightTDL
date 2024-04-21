import { test, expect } from '@playwright/test';

test.use({ storageState: { cookies: [], origins: [] } });
test('Codegen test: Add item to cart and assert that the correct item with the correct price is shown in the cart.', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('audrius.bertasius@testdevlab.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('P@ssWord');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Tshirts' }).click();
  await expect(page.getByRole('heading', { name: 'Men - Tshirts Products' })).toBeVisible();
  await page.locator('.choose > .nav > li > a').first().click();
  await page.getByRole('button', { name: ' Add to cart' }).click();

  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.locator('#product-2')).toContainText('Men Tshirt');
  await expect(page.locator('#product-2')).toContainText('Rs. 400');
  await page.getByText('Proceed To Checkout').click();
  await expect(page.getByRole('heading', { name: 'Review Your Order' })).toBeVisible();
  await expect(page.locator('#product-2')).toContainText('Men Tshirt');
  await expect(page.locator('tbody')).toContainText('Rs. 400');
  await page.getByRole('link', { name: 'Place Order' }).click();

  //Go through the checkout flow and make a successful purchase'
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('Audrius Ber');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').fill('1111222233334444');
  await page.getByPlaceholder('ex.').click();
  await page.getByPlaceholder('ex.').fill('311');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('09');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('2025');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

  await expect(page.getByText('Order Placed!')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Download Invoice' })).toBeVisible();
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page.getByRole('heading', { name: 'AutomationExercise' }).locator('span')).toBeVisible();
});