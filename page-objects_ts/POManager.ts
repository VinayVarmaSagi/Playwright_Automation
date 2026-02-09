import { expect, type Locator, type Page } from '@playwright/test';
import {CartPage} from '../page-objects/CartPage';
import {LoginPage} from '../page-objects/LoginPage';
import {DashboardPage} from '../page-objects/DashboardPage';
import {OrdersHistoryPage} from '../page-objects/OrdersHistoryPage';
import {OrdersReviewPage} from '../page-objects/OrdersReviewPage';

export class POManager{
    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    cartPage:CartPage;
    ordersHistoryPage:OrdersHistoryPage;
    orderReviewPage:OrdersReviewPage;
    page:Page;
    constructor(page:any){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboardPage=new DashboardPage(this.page);
        this.cartPage=new CartPage(this.page);
        this.ordersHistoryPage=new OrdersHistoryPage(this.page);
        this.orderReviewPage=new OrdersReviewPage(this.page);
    }

    LoginPage(){
        return this.loginPage;
    }

    DashboardPage(){
        return this.dashboardPage;
    }

    CartPage(){
        return this.cartPage; 
    }

    OrdersHistoryPage(){
        return this.ordersHistoryPage; 
    }

    OrdersReviewPage(){
        return this.orderReviewPage;
    }

}
module.exports={POManager};