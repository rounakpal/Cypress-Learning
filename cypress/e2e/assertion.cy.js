describe('assertion', () => {
    it('implicity assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // Asseration for the url 
      //  cy.url().should('include','orangehrmlive')
      //  cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // Multiple assertion at one time 
   /*    cy.url().should('include','orangehrmlive')
        .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        .should('contain','orangehrm')   */

    //Multiple assertion using "and" 
  /*  cy.url().should('include','orangehrmlive')
    .and('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    .and('contain','orangehrm')
    }); */

    // Negative assertion 
  //  cy.title().should('include','OrangeHRM')

  //  cy.get('.orangehrm-login-branding > img').should('be.visible') // verify that the logo is visible or not 
 //   .and('exist')  // verify that the logo is exist or not

 //   cy.xpath("//a").should('have.length','5') // no of links 

 // cy.get("input[placeholder='Username']").type("Admin"),
 // cy.get("input[placeholder='Username']"). should('have.value','Admin')

  }); 
  it('Explicit assertion', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.get("input[placeholder='Username']").type("Admin")
    cy.get("input[placeholder='Password']").type("admin123")       
  });
});