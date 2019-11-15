// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("getProduct", (productName, productPrice) => { 

    cy.get('app-card-list').find('app-card').each(($element, index, $list) => {

        if($element.text().includes(productName)) {
        
            const elementPrice = $element.find('h5');
            assert(elementPrice.text() === productPrice, "Product price is as expected")

            cy.log('Add to cart!')
            $element.find('button').click()
        }
    })

})


import HomePage from '../integration/pageObjects/home';
Cypress.Commands.add("selectProduct", (productName) => { 
  
    const homePage = new HomePage();  // not used, but no error either :O

    cy.get('app-card-list').find('app-card').each(($element, index, $list) => {

        if($element.text().includes(productName)) {
        
            cy.log('Add to cart!')
            $element.find('button').click()
        }
    })

})



import ProductPage from '../integration/pageObjects/product';
Cypress.Commands.add("selectProductUSINGPAGE", (productName) => { 
  
    const productPage = new ProductPage();  

    productPage.getProductList().each(($element, index, $list) => {

        if($element.text().includes(productName)) {
        
            productPage.addToCart($element);
            
        }
    })

})


