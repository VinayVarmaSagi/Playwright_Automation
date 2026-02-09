Feature: Ecommerce validations
    @Regression
    Scenario: Place Order
        Given Login to Ecommerce web application with "vinayvarma.sagi@gmail.com" and "Nikvin@398"
        When Add "ZARA COAT 3" to the Cart
        Then Verify that the "ZARA COAT 3" is displayed in the Cart
        When Enter valid dates and Place the Order for "ind" i.e "India" for "vinayvarma.sagi@gmail.com"
        Then Verify order present in OrderHistory page