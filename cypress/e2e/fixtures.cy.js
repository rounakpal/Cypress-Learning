describe("testing fixture data",() => {
    let userdata;
        before(() => {
            cy.fixture('login').then((data)=>{
                // Store the fixture data for later use
                userdata = data; 
            })
        })
        
        it.only('testing fixtures', function() {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      //     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.user);
      //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password); 
      //     cy.get('.oxd-button').click()
        });  
    });