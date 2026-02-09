import {test as baseTest} from '@playwright/test';
interface TestDataForOrder{//initialise Object first
    username:string,
    password:string,
    productName:string
}
export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>({
    testDataForOrder:{//custom fixture
        
    username:"vinayvarma.sagi@gmail.com",
    password:"Nikvin@398",
    productName:"ZARA COAT 3"
    }
})