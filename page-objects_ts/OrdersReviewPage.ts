import { expect, type Locator, type Page } from '@playwright/test';

export class OrdersReviewPage {
    page: Page;
    successtext: Locator;
    orderIDtext: Locator;
    myorders: Locator;
    loadTable: Locator;
    rows: Locator;
    orderIDtextHistoryPage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.successtext = page.locator(".hero-primary");
        this.orderIDtext = page.locator(".em-spacer-1 .ng-star-inserted");
        this.myorders = page.locator("button[routerlink*='myorders']");
        this.loadTable = page.locator("table");
        this.rows = page.locator("tr[class='ng-star-inserted']");
        this.orderIDtextHistoryPage = page.locator(".col-text");

    }

    async verifyOrderDetails() {
        await expect(this.successtext).toHaveText(" Thankyou for the order. ");
        const order_ID = await this.orderIDtext.textContent();
        console.log(order_ID);
        return order_ID;
    }

    async verifyOrderReviewPage(order_ID: string) {
        await this.myorders.click();
        await this.loadTable.waitFor();
        //const rows = this.rows;
        const count_Row = await this.rows.count();
        for (let i = 0; i < count_Row; i++) {
            let orderId_Row: any;
            orderId_Row = await this.rows.nth(i).locator("th").textContent();
            if (order_ID.includes(orderId_Row)) {
                await this.rows.nth(i).locator(".btn").first().click();
                break;
            }
        }
        const order_ID_Summary_Page = await this.orderIDtextHistoryPage.textContent();

        expect(order_ID).toContain(order_ID_Summary_Page);

    }
}
module.exports = { OrdersReviewPage };