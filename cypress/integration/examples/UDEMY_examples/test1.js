/// <reference types="Cypress"/>



describe("Security Test Suite", function(){
    
    beforeEach(function() {
        cy.log('Starting test...');
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    })


    afterEach(function(){
        cy.log('...Test complete');
    })



    it("Entering login information takes me to the dashboard page", function(){


        cy.log('Search for "ca"');
        cy.get('.search-keyword').type('ca');

        //TODO: come back here, no wait should be required
        cy.wait(2000);

        cy.log('Check for capsicum in the resulting product list');
        // assertion type 1...
        cy.get('.products').find('product').should('have.length', 4);

        cy.get('.products').find('.product').each(($element, index, $list) => {

            var productText = $element.find('h4.product-name').text();
            if(productText.includes('Capsicum')) {

                // click 'ADD TO CART'
                $element.find('button').click();
                cy.log("found capsicum; added to cart");

            } else {

                cy.log("found " + productText);
            }
        })
    })


    it("next test; get the logo", function() {

        // console.log('Starting test');
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        // using variables:  THEN() then() - promises, manual promise
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())
            // ^^ beware text() is not Cypress language so can only work on a resolved 
            // promise like this

        })

        // aliases:
        cy.get('.search-keyword').as('searchBar');
        cy.get('@searchBar').type('hello there');

        // assertion type 2:
        cy.get('.brand').should('have.text', 'GREENKART')

    })



    it("Proceed to checkout...", function() {

        // console.log('Starting test');
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.log('Search for "ca"');
        cy.get('.search-keyword').type('ca');

        //TODO: come back here, no wait required
        cy.wait(2000);

        cy.log('Check for capsicum in the resulting product list');
        cy.get('.products').find('.product').each(($element, index, $list) => {

            var productText = $element.find('h4.product-name').text();
            if(productText.includes('Capsicum')) {

                // click 'ADD TO CART'
                $element.find('button').click();
                cy.log("found capsicum; added to cart");

            } 
            
        })


        // click the bag
        cy.get('.cart-icon > img').click() // popup opens in page
        cy.contains('PROCEED TO CHECKOUT').click();
        //.then(function(){
            cy.wait(10000)
            cy.contains('Place Order').click();
        //})
        

   
    })





})
