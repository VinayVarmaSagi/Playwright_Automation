const { test, expect } = require('@playwright/test');

class CartPage {

    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");
    }

    productLocator(productName) {
        return this.page.locator("h3").filter({ hasText: productName });
    }

    async verifyProductInCartPage(productName) {
        const bool = await this.productLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

}
module.exports = { CartPage }