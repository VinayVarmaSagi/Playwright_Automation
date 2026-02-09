const { test, expect } = require('@playwright/test');
const { POManager } = require('../page-objects/POManager');
const { customtest } = require('../utils/test-base');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));

for (const data of dataset) {
  test(`@Web Login and Order product ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);
    const searchString = "ind";
    const country = "India";
    const loginPage = poManager.LoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    const dashboardPage = poManager.DashboardPage();
    await dashboardPage.searchProductAddToCart(data.productName);
    await dashboardPage.goToCartPage();

    const cartPage = poManager.CartPage();
    await cartPage.verifyProductInCartPage(data.productName);
    await cartPage.clickCheckout();

    const ordersHistoryPage = poManager.OrdersHistoryPage();
    await ordersHistoryPage.chooseCountry(searchString, country);
    await ordersHistoryPage.verifyShippingemail(data.username);
    await ordersHistoryPage.submitOrder();

    const ordersReviewPage = poManager.OrdersReviewPage();
    const order_ID = await ordersReviewPage.verifyOrderDetails();
    await ordersReviewPage.verifyOrderReviewPage(order_ID);

  })
}


customtest("custom fixture", async ({ page, testDataForOrder }) => {
  const poManager = new POManager(page);
  const searchString = "ind";
  const country = "India";
  const loginPage = poManager.LoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

  const dashboardPage = poManager.DashboardPage();
  await dashboardPage.searchProductAddToCart(testDataForOrder.productName);
  await dashboardPage.goToCartPage();

  const cartPage = poManager.CartPage();
  await cartPage.verifyProductInCartPage(testDataForOrder.productName);
  await cartPage.clickCheckout();
})