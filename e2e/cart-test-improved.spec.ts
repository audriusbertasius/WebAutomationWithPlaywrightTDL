import { expect } from "@playwright/test";
import test from "../fixtures/pages";

test("test", async ({ productsPage, page }) => {
  await productsPage.navigateToPage("/products");
  await expect(page.getByText("Logged in as Audrius")).toBeVisible();
});
