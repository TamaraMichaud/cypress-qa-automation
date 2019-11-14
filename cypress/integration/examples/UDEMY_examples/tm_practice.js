/// <reference types="Cypress"/>





// https://stackoverflow.com/questions/50685302/page-object-pattern-in-cypress
/* For example: I create a test that a "user can log in with valid username and password"- Cypress navigates to the login page, types in the user field, types in the password field and clicks the "Log in" button. The Page Object Pattern would have you reuse this action on every test that requires a user to be logged in (most of the tests)

Cypress supports this; however, this is slower than it has to be. It takes a considerable amount of time to navigate to a login page, type in the information, handle the response, and navigate to the page under test. Instead, Cypress's API allows the following:

    use cy.request() to directly hit your server with the login credentials. This requires no state of your app, no typing in fields, no clicking buttons, or page directs
    Any cookies your site uses are automatically set, or you can set localStorage using the response
    Make this a custom command, call it before every test, and boom- you've generated your user's state almost instantly and most importantly flake-free
*/











describe("Security Test Suite", function(){
    

    it("Entering login information takes me to the dashboard page", function(){
        cy.log("Setting test variables");
// cy.fixture()


        cy.log("Starting test...");
        cy.visit("");




        cy.log("...test Complete");
    });

    // next test...

});