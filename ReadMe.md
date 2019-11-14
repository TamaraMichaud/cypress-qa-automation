- Command-line execution;

	./node_modules/.bin/cypress run
		^^ always headless, always electron browser, all scripts in /integration/* 

        ./node_modules/.bin/cypress run --spec "cypress/integration/examples/UDEMY_examples/test1.js"
                ^^ force a specific test to execute

	./node_modules/.bin/cypress run --headed --spec "cypress/integration/examples/UDEMY_examples/test1.js"
		^^ to make it headed

	./node_modules/.bin/cypress run --browser chrome --headed --spec "cypress/integration/examples/UDEMY_examples/test1.js"
                ^^ to make it use a "different" (the only other) browser...



- Selectors:

	(tagname optional)
	tagname#idref
	tagname.class-name
	tagname[attribute=value]


	e.g. 	input#name
		button.submit-button
		div[data-cy=thedivwewant]



    - Nested Selectors:

		cy.get('#idref').type('haha')  << directly access by id
		cy.get('#idref').find(.aclasstahtexistselsewhereinthedomthatwedontwant)  << we only know the class, but the class is repliacted elsewhere... but we have a parent with an id, so ^^

                VERSUS:
		cy.get('#idref > .aclass') ?? << is this better or worse than    .find() ?
				^^ negligible difference apparently			



- Promises:

		Resolved: the step is executed
		Rejected: there is an error in the step
		Pending: yet to execute

	.then() [chainable method]; Cypress uses it implicitly
		can be used in the place of wait() in certain places (?)


	.text() -> can only work on a resolved object because it is jQuery not Cypress...


- Assertions:

        //BEHVAIOUR -> shuld('be.') ->
        //PROPERTY -> should('have.')

        // assert that my name is duplicated in the other name box
        cy.get(':nth-child(4) > .ng-untouched')
                .should('have.value', this.userInfo.name);
        // assert that my name is at least 2 chars
        cy.wrap(this.userInfo.name)
                .should('have.length.gte', 2);

                //OR assert that attribute "minlength" has value "2"
        cy.get(':nth-child(1) > .form-control')
                .should('have.attr', 'minlength', '2');

        // assert that Entrepreneur(disabled) is indeed disabled
        // cy.get('#inlineRadio3').should('have.attr', 'disabled', 'disabled')

        cy.get('#inlineRadio3').should('be.disabled')
        // cy.get('#inlineRadio3').should('not.be.visible')

