describe('Datadriven testing', () => {
    it('', () => {
        cy.fixture("login2").then((data) => {
             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            data.forEach(userdata => {
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.user);
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password); 
            cy.get('.oxd-button').click()
            
            if(userdata.user === "Admin" && userdata.password === "admin123"){
              cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text',userdata.expected);
              cy.get('.oxd-userdropdown-tab').click();
              cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); 

            }
            else{
                cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected);
            }
        })
        })

    });
});