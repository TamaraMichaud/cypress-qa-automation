const NAME_INPUT = ':nth-child(1) > .form-control';
const GENDER_DROPDOWN = '#exampleFormControlSelect1';
const TWO_WAY_DATA_BIND_BOX = ':nth-child(4) > .ng-untouched';
const ENTREPRENOUR_RADIO = '#inlineRadio3';
const SHOP_NAV = ':nth-child(2) > .nav-link';

class HomePage {

    getNameInput(){

        return cy.get(NAME_INPUT);
    }

    getGenderDropdown(){

        return cy.get(GENDER_DROPDOWN);
    }

    getTwoWayDataBindBox(){
        return cy.get(TWO_WAY_DATA_BIND_BOX);
    }

    getEntrepreneurRadio(){
        return cy.get(ENTREPRENOUR_RADIO);
    }

    goToShop(){

        cy.get(SHOP_NAV).click();
    }

}

export default HomePage;