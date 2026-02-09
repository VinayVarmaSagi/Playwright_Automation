
import { expect, type Locator, type Page } from '@playwright/test';


export class CartPage{
    page:Page;
    checkoutButton:Locator;
    constructor(page:Page){
        this.page=page;
        this.checkoutButton =page.locator("text=Checkout");
    }

    productLocator(productName:string) {
    return this.page.locator("h3").filter({ hasText: productName });
    }

    async verifyProductInCartPage(productName:string){
       const bool = await this.productLocator(productName).isVisible();
       expect(bool).toBeTruthy();
    }

    async clickCheckout(){
        await this.checkoutButton.click();
    }

}
module.exports={CartPage}