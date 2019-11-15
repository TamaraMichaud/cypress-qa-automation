const PRODUCT_LIST = 'app-card-list';
const SINGLE_PRODUCT = 'app-card';
const ADD_TO_CART_BUTTON = 'button';
// const CHECKOUT_BUTTON = /Checkout/; // << how do we set wildcard locators!? :S
// ^^ or do we simply make the method into the locator; "getAddToCartButton().click()" ??

class ProductPage {

    getProductList(){

        return cy.get(PRODUCT_LIST).find(SINGLE_PRODUCT);
    }

    addToCart(productObj) {

        cy.log('Add to cart!');
        productObj.find(ADD_TO_CART_BUTTON).click();

    }

    proceedToCheckout(){

        cy.get('#navbarResponsive').contains(/Checkout/).click()
    }

}

export default ProductPage;