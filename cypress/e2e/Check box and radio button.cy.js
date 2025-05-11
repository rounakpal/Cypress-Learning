
import 'cypress-real-events/support';

describe("check box and radio button", () => {
    it('Verify that user is able to select "Female" and "male" radio button', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")     // visit the url
        cy.get('#female[type="radio"]').check()                      // Check the "Female" radio button
        cy.get('#female[type="radio"]').should('be.checked');       // Verify that the "female" radio button is checked
        cy.get('#male[type="radio"]').should('not.be.checked');     // Verify that the "Male" radio button is not checked
        cy.get('#male[type="radio"]').check();                      // Check the "Male" radio button
        cy.get('#female[type="radio"]').should('not.be.checked');   // Verify that the "female" radio button is not checked
        cy.get('#male[type="radio"]').should('be.checked');         // Verify that the "male" radio button is checked
    });

    it('Verify the default state of radio button',() =>{
        cy.visit("https://testautomationpractice.blogspot.com/") 
        cy.get('#male[type="radio"]').should('not.be.checked'); 
        cy.get('#female[type="radio"]').should('not.be.checked');
    });
    it('Verify the state of radio button after refreshing the page', () => {
        cy.visit("https://testautomationpractice.blogspot.com/") 
        cy.get('#female[type="radio"]').check()
        cy.get('#male[type="radio"]').check();  
        cy.reload()
        cy.get('#male[type="radio"]').should('not.be.checked');
        cy.get('#female[type="radio"]').should('not.be.checked');
    });

    it('Verify that the alignment of radio button', () => {
        cy.visit("https://testautomationpractice.blogspot.com/") 
        cy.get('#female[type="radio"]').should('have.css', 'display', 'block');
        cy.get('#male[type="radio"]').should('have.css', 'display', 'block');
    });

    it('Verify keyboard navigation (Tab key, Spacebar, and Arrow keys) to select the radio button.', () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#female[type="radio"]').focus().realPress('Space');
        cy.get('#female[type="radio"]').should('be.checked');
        cy.get('#male[type="radio"]').focus().realPress('Tab');
        cy.get('#male[type="radio"]').should('be.checked');
        cy.focused().realPress('ArrowRight');
        cy.focused().should('have.value', 'male');
        cy.focused().realPress('ArrowLeft');
        cy.focused().should('have.value', 'female');
    });
});

describe('Test Scenarios for Check box', () => {
    it(' Verify that the checkbox is present on the webpage.', () => {
        cy.visit("https://testautomationpractice.blogspot.com/") 
        cy.get('#sunday[type="checkbox"]').should('be.visible'); // Verify that the checkbox is present on the webpage
        cy.get('#sunday[type="checkbox"]').check(); // Verify that the checkbox is enabled
        cy.get('#sunday[type="checkbox"]').should('be.checked'); // Verify that the checkbox is checked
        cy.get('#sunday[type="checkbox"]').uncheck(); // Verify that the checkbox is unchecked
        cy.get('#sunday[type="checkbox"]').should('not.be.checked'); // Verify that the checkbox is unchecked
    });

    it('Verify that user is ablen to selc the multiple ',() => {
        cy.visit("https://testautomationpractice.blogspot.com/") 
        cy.get('#sunday[type="checkbox"]').check(); // Check the "Sunday" checkbox
        cy.get('#monday[type="checkbox"]').check(); // Check the "monday" checkbox
        cy.get('#tuesday[type="checkbox"]').check(); // Check the "tuesday" checkbox
        cy.get('#wednesday[type="checkbox"]').check(); // Check the "wednessday" checkbox
        cy.get('#sunday[type="checkbox"]').should('be.checked'); 
    })
});