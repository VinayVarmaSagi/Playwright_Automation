const { When, Given, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../page-objects/POManager');
const { expect } = require('@playwright/test');


Given('Login to Ecommerce web application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
  const loginPage = this.poManager.LoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(username, password);
});

When('Add {string} to the Cart', { timeout: 100 * 1000 }, async function (productName) {
  const dashboardPage = this.poManager.DashboardPage();
  await dashboardPage.searchProductAddToCart(productName);
  await dashboardPage.goToCartPage();
});

Then('Verify that the {string} is displayed in the Cart', { timeout: 100 * 1000 }, async function (productName) {
  const cartPage = this.poManager.CartPage();
  await cartPage.verifyProductInCartPage(productName);
  await cartPage.clickCheckout();
});

When('Enter valid dates and Place the Order for {string} i.e {string} for {string}', { timeout: 100 * 1000 }, async function (searchString, country, username) {
  const ordersHistoryPage = this.poManager.OrdersHistoryPage();
  await ordersHistoryPage.chooseCountry(searchString, country);
  await ordersHistoryPage.verifyShippingemail(username);
  await ordersHistoryPage.submitOrder();
});

Then('Verify order present in OrderHistory page', { timeout: 100 * 1000 }, async function () {
  const ordersReviewPage = this.poManager.OrdersReviewPage();
  const order_ID = await ordersReviewPage.verifyOrderDetails();
  await ordersReviewPage.verifyOrderReviewPage(order_ID);
});

Given('login to Ecommerce app with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {
  const userName = this.page.locator('input#username');
  const submit = this.page.locator("[type='submit']");
  await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  await userName.fill(username);
  await this.page.locator('[type="password"]').fill(password);
  await submit.click();

});

Then('verify error message is displayed', { timeout: 100 * 1000 }, async function () {

  console.log(await this.page.locator("[style*='block']").textContent());
  await expect(this.page.locator("[style*='block']")).toContainText("Incorrect");
});         