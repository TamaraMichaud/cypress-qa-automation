- Getting Started:

	- after installing node-js, create your project folder, enter it and execute:
		npm init  						  // and follow the walkthrough
		npm install cypress --save-dev	  // this will create the node_modules folder 
												(add to .gitignore, you can have a common node_modules for all projects, simply ensure you launch it from the correct project..)
		./node_modules/.bin/cypress open  // this will create your cypress folder



- Command-line execution;

	./node_modules/.bin/cypress run
		^^ always headless, always electron browser, all scripts in /integration/* 

        ./node_modules/.bin/cypress run --spec "cypress/integration/examples/UDEMY_examples/test1.js"
                ^^ force a specific test to execute

	./node_modules/.bin/cypress run --headed --spec "cypress/integration/examples/UDEMY_examples/test1.js"
		^^ to make it headed

	./node_modules/.bin/cypress run --browser chrome --headed --spec "cypress/integration/examples/UDEMY_examples/test1.js"
                ^^ to make it use a "different" (the only other) browser...

	./node_modules/.bin/cypress run --browser chrome --headed --spec "cypress/integration/examples/UDEMY_examples/test1.js" --env environment="test"



- Dashboard Setup

		./node_modules/.bin/cypress run --record --key 0b5bb2ee-2baf-4f40-922b-e71b459c5967

	OR, add to cypress.json:

		{
 		 "projectId": "9h6f9h"
		}



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



- Troubleshooting

	[command-line execution from powershell]
	On execution of:
		./node_modules/.bin/cypress run --browser chrome --headed --spec "cypress/integration/examples/UDEMY_examples/test4-environmentalVars.js" --env environment="qa"

	If you receive the following error message:
		node_modules\.bin\cypress.ps1 cannot be loaded
		because running scripts is disabled on this system. For more information, see about_Execution_Policies at
		https:/go.microsoft.com/fwlink/?LinkID=135170.
		At line:1 char:1
		+ ./node_modules/.bin/cypress run --browser chrome --headed --spec "cyp ...
		+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    		+ CategoryInfo          : SecurityError: (:) [], PSSecurityException
    		+ FullyQualifiedErrorId : UnauthorizedAccess

	Then run the following:
		Set-ExecutionPolicy -Scope CurrentUser
	You will be prompted with:
		ExecutionPolicy:
	To which the answer is: 
		remotesigned

