/// <reference types="cypress"/>

import HomePage from "../../pageObjects/home";
import ProductPage from "../../pageObjects/product";
import ShoppingCart from "../../pageObjects/subPages/shoppingCart";
import Checkout from "../../pageObjects/subPages/checkout";

Cypress.config('pageLoadTimeout', 5000); // over-ride cypress.json ONLY FOR THIS SUITE; 
// ^^ you can also put this  before and after the specific action you want to change the wait
// for (i.e. inside an "it"... (maybe it should only be inside the it... this way does not
// cause an error, but doesn't mean it's certainly correct...! :/))


describe("Full Test Using Lessons Learnt", function(){
    
    beforeEach(function() {
        
        cy.log('Starting test...');
        cy.visit("https://rahulshettyacademy.com/angularpractice");
        cy.fixture('test2-fixtures').as("suiteInfo");
    })


    afterEach(function(){
        cy.log('...Test complete');
    })



    it("Example 3 - Custom Commands - Usage", function() {

        const homePage = new HomePage();
        const productPage = new ProductPage();
        const shoppingCart = new ShoppingCart();
        const checkout = new Checkout();

        // go to the shop
        homePage.goToShop();

        // array iteration in js... (productList is an array)
        this.suiteInfo.productList.forEach(function(productName) {

            cy.selectProductUSINGPAGE(productName);
        })
        

        // click Checkout
        productPage.proceedToCheckout();
        // check totals
        shoppingCart.checkTotals();
cy.log("HOW DO WE DO MATHS?");

        // proceed
        shoppingCart.continueCheckout();

        // enter delivery country
        checkout.selectDeliveryCountry('India');
        // tick terms and conditions
        checkout.acceptTerms();
        // Purchase
        checkout.completePurchase();

        // assert success
        // expect(checkout.wasPurchaseSuccessful()).to.be.true;
        // ^^ THIS DOES NOT WORK ASYCNRHONOUSLY!! do the assertion within the method as a then...?
        checkout.wasPurchaseSuccessful()

    })


})
