describe('Xpath Locatore', () => {
    it('find no of product', () => {
        cy.visit("https://www.demoblaze.com/index.html")   
        cy.xpath("//div[@id='tbodyid']/div").should('have.length',9)
    });

    it('chained Xpath', () => {
        cy.visit("https://www.demoblaze.com/index.html")   
        cy.xpath("//div[@id='tbodyid']").xpath("./div").should('have.length',9)
    });
});