class Login {

    setusername(){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
    }

    setpassword(){
         cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    }

    submitbtn(){
        cy.get('.oxd-button').click(); 
    }
}

export default Login; 