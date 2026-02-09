const {LoginPage} = require('../page-objects/LoginPage'); 
const {DashboardPage} = require('../page-objects/DashboardPage');
const {OrdersHistoryPage} = require('../page-objects/OrdersHistoryPage');
const {OrdersReviewPage} = require('../page-objects/OrdersReviewPage');
const {CartPage} = require('../page-objects/CartPage');

class POManager{

    constructor(page){
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