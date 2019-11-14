/// <reference types="cypress"/>



describe("Framework Test Suite", function(){
    
    beforeEach(function() {
        cy.log('Starting test...');
        cy.visit("https://rahulshettyacademy.com/angularpractice");
        cy.fixture('test2-fixtures').as("suiteInfo");

    })


    afterEach(function(){
        cy.log('...Test complete');
    })



    it("Example 1 - Fixtures & Assertions", function(){

        //populate the name field
        cy.get(':nth-child(1) > .form-control').type(this.suiteInfo.name);
        //select a gender dropdown
        cy.get('#exampleFormControlSelect1').select(this.suiteInfo.gender);


        // assert that my name is duplicated in the other name box
        cy.get(':nth-child(4) > .ng-untouched')
                .should('have.value', this.suiteInfo.name);
        // assert that my name is at least 2 chars
        cy.wrap(this.suiteInfo.name)
                .should('have.length.gte', 2);

                //OR assert that attribute "minlength" has value "2"
        cy.get(':nth-child(1) > .form-control')
                .should('have.attr', 'minlength', '2');

        // assert that Entrepreneur(disabled) is indeed disabled
        // cy.get('#inlineRadio3').should('have.attr', 'disabled', 'disabled')

        //BEHVAIOUR -> shuld('be.') ->
        //PROPERTY -> should('have.')

        cy.get('#inlineRadio3').should('be.disabled')
        // cy.get('#inlineRadio3').should('not.be.visible')
             
    })


    it("Example 2 - Custom Commands - Prelude", function() {

        // go to the shop
        cy.get(':nth-child(2) > .nav-link').click();

        // get the products and iterate...
        cy.get('app-card-list').find('app-card').each(($element, index, $list) => {

// dollar is optional...(!)
            cy.log($element.text());
            if($element.text().includes('Blackberry')) {

// assert that the price is...50000
                // $element.find('h5').then(function(priceElement){
                    //^^ this is illegal... but why?
                    
                    // priceElement.text().should('have.value', '$24.99')
                    
                // })
                const productPrice = $element.find('h5');
                // cy.log(productPrice.text())
                
                assert(productPrice.text() === '$24.99', "Product price is as expected")

                // productPrice.text().includes('$24.99')
                // ^^ ?? includes() vs contains() vs regex (is illegal here)

                cy.log('Add to cart!')
                $element.find('button').click()
            }
        })

    })


    

    it("Example 3 - Custom Commands - Usage", function() {

        // go to the shop
        cy.get(':nth-child(2) > .nav-link').click();

        // get the products and iterate...
        cy.getProduct(this.suiteInfo.productName, this.suiteInfo.productPrice);

        cy.getProduct('Nokia Edge', '$24.99');

        // array iteration in js... (productList is an array)
        this.suiteInfo.productList.forEach(function(productName) {

            cy.selectProduct(productName)
        })
        

        // cy.log("Nested: " + this.productInfo.name);  << nope :(

    })


})
