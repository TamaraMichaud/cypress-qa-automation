const PRODUCT_LIST = 'table > tbody > tr';
const CONTINUE_SHOPPING_BUTTON = 'button.btn-default';
const CHECKOUT_BUTTON = 'button.btn-success';

const PRODUCT_NAME = 'h4 > a';
const PRODUCT_PRICE = 'td:nth-child(4)';
const TOTAL_PRICE = 'td:nth-child(5)';


class ShoppingCart {

    checkTotals(){

        var totalPrice = 0;
        var cumulativePrices = 0;
        // cy.get(PRODUCT_LIST).each(function(productTableRow){
        cy.get(PRODUCT_LIST).each((productTableRow, index, $list) => {

            var itemName = productTableRow.find(PRODUCT_NAME).text();
            // var itemPrice = productTableRow.find(PRODUCT_PRICE).text();
            if(itemName == "") {
                // not a product
                var overallPrice = productTableRow.find(TOTAL_PRICE).text();
                if( overallPrice != "" && totalPrice == 0) {

                    totalPrice = Number(overallPrice.split(' ')[1]);
                    cy.log("Total price per page: " + totalPrice);

                }

            } else {
                // is a product
                var itemPrice = productTableRow.find(PRODUCT_PRICE).text().split(' ')[1].trim();
                cy.log("Item Name: " + productTableRow.find(PRODUCT_NAME).text() + " Costs: " + itemPrice);
                cumulativePrices = Number(cumulativePrices) + Number(itemPrice);

            }
        }).then(function(){

            cy.log("Summed prices " + cumulativePrices + " equal to: " + totalPrice + "?");
            expect(cumulativePrices).to.equal(totalPrice);
        })
    }

    continueCheckout(){
        cy.get(CHECKOUT_BUTTON).click();
    }

}

export default ShoppingCart;