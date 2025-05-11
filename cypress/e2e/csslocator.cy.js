describe('select', () => {
    it('CSS Locator', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input.oxd-input--active[name='username']").should('be.visible')

        

    });
});