const base = require('@playwright/test');

exports.customtest = base.test.extend({
    testDataForOrder: {
        username: "vinayvarma.sagi@gmail.com",
        password: "Nikvin@398",
        productName: "ZARA COAT 3"
    }
})