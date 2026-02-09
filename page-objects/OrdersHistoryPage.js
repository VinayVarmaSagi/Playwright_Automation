const { test, expect } = require('@playwright/test');

class OrdersHistoryPage {
    constructor(page) {
        this.page = page;
        this.dropdownLocator = page.locator("[placeholder*='Country']");
        this.dropdownResults = page.locator(".ta-results");
        this.buttons = this.dropdownResults.locator("button");
        this.usernametext = page.locator(".user__name [type='text']");
        this.placeOrder = page.locator(".action__submit");
    }

    async chooseCountry(searchString, country) {
        await this.dropdownLocator.pressSequentially(searchString);

        await this.dropdownResults.waitFor();
        const optionsCount = await this.buttons.count();

        for (let i = 0; i < optionsCount; i++) {
            const text = (await this.buttons.nth(i).innerText()).trim();
            console.log("text is " + text);

            if (text === country.trim()) {
                await this.buttons.nth(i).click();
                break;
            }
        }
    }

    async verifyShippingemail(username) {
        await expect(this.usernametext.first()).toHaveText(username);
    }

    async submitOrder() {
        await this.placeOrder.click();
    }
}
module.exports = { OrdersHistoryPage };