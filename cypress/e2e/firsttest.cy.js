describe('suite test',() => {
    it('verify title',() => {
        cy.visit("https://www.demoblaze.com/")
        cy.title().should('eq',"STORE")
 })

})