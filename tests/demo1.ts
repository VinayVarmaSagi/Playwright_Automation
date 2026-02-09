import { expect, type Locator, type Page } from '@playwright/test';

let message1: string = "Hello";
console.log(message1);

let age1: number = 20;
console.log(age1);

let numbers1: number[] = [1, 2, 3, 4];
console.log(numbers1);

let data: any = "any data type";
data = 42;

function addNum(a: number, b: number): number {
    return a + b;
}

addNum(3, 4);


let user: { name: string, age: number } = { name: "nikvin", age: 28 };

class CartPage {
    page: Page;
    checkoutButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator("text=Checkout");
    }

    productLocator(productName: any) {
        return this.page.locator("h3").filter({ hasText: productName });
    }

    async verifyProductInCartPage(productName: any) {
        const bool = await this.productLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

}