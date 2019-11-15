const COUNTRY_INPUT = '#country';
const COUNTRY_DROPDOWN = "div.suggestions > ul";
const T_AND_C_CHECKBOX = '#checkbox2';
const PURCHASE_BUTTON = 'input[value="Purchase"]';
const SUCCESS_ALERT = '.alert-success';
const SUCCESS_MESSAGE = 'Success! Thank you! Your order will be delivered in next few weeks';


class Checkout {

   selectDeliveryCountry(countryValue){

        cy.get(COUNTRY_INPUT).type(countryValue);
        Cypress.config('pageLoadTimeout', 5000); 
        cy.get(COUNTRY_DROPDOWN).contains(countryValue).click();
   }


   acceptTerms(){
       cy.get(T_AND_C_CHECKBOX).check({force: true});
   }


   completePurchase(){
    cy.get(PURCHASE_BUTTON).click();
   }


   wasPurchaseSuccessful(){

    // cy.get(SUCCESS_ALERT).should('contain.text', SUCCESS_MESSAGE); // nope
    cy.get(SUCCESS_ALERT).then(function(alertElement) {

        var result = false;
        if(alertElement.text().includes(SUCCESS_MESSAGE)) {
            result = true;
        } else {
            result = false;
        }

        expect(result).to.be.true;
    })
   }



}

export default Checkout;