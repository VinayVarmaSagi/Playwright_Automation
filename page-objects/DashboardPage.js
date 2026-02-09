class DashboardPage {
    constructor(page) {
        this.products = page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.navigateToCart = page.locator("[routerlink*='cart']");
        this.cartLoaded = page.locator("div li");
    }


    async searchProductAddToCart(productName) {
        const titles = await this.productsText.allTextContents();
        console.log(titles);
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            if (await this.products.nth(i).locator("b").textContent() === productName) {
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async goToCartPage() {
        await this.navigateToCart.click();
        await this.cartLoaded.first().waitFor();
    }
}
module.exports = { DashboardPage };