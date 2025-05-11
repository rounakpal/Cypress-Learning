describe('Test Scenarios for dropdown field', () => {
    it.only('Verify that the dropdown is visible in the page', () => {
      cy.visit(Cypress.env("baseurl")) // Visit the URL
      cy.get('#country.form-control').should('be.visible'); // Verify that the dropdown is visible on the page
      cy.get('#country.form-control').select('United States').should('have.value', 'usa') // Select the first option and verify its value. select takes values,index and text as well.
    });
});