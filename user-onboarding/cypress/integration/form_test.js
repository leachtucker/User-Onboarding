describe('User-onboarding app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosCheckbox = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id="submit-button"]');

    const nameH4 = () => cy.get('h4[class="user-name"]');

    // Check that cypress can find all the elements we would like to test
    it('Proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosCheckbox().should('exist');
        submitButton().should('exist');
    })

    // Check input text fields
    it('Can type in the name, email, and password fields', () => {
        nameInput()
            .should('have.value', '')
            .type('User1')
            .should('have.value', 'User1');

        emailInput()
            .should('have.value', '')
            .type('user@user.com')
            .should('have.value', 'user@user.com');

        passwordInput()
            .should('have.value', '')
            .type('password1')
            .should('have.value', 'password1');
    })

    // Check tos checkbox
    it('Can check and uncheck the terms of service checkbox', () => {
        tosCheckbox()
            .should('have.value', "false")
            .check()
            .should('have.value', "true");
    })

    // Check that user can submit the form with proper data
    it('Can submit form with proper data', () => {
        nameInput().type('John Doe');
        emailInput().type('john@john.com');
        passwordInput().type('password1');
        tosCheckbox().check();
        submitButton().invoke('attr', 'disabled').should('not.exist');
    })

    // Check for form validation when a user leaves an input empty
    it('Form validation when a user leaves an input empty', () => {
        nameInput().type('John Doe');
        emailInput().type('john@john.com');
        // Password left empty
        tosCheckbox().check();
        submitButton().invoke('attr', 'disabled').should('exist');
    })

    // Check that user is displayed after submitting form
    it('User name', () => {
        // Submit form
        nameInput().type('John Doe');
        emailInput().type('john@john.com');
        passwordInput().type('password1');
        tosCheckbox().check();
        submitButton().click();

        // Check for display of user
        cy.contains('John Doe').should('exist');
        cy.contains('john@john.com').should('exist');
    })

})