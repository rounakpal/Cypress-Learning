import Login from "../../Page Object Model/Login"

describe('testing with pom', () => {
  it('fixtures with pom', () => {
    cy.fixture("Login").then((data) => {
        const login = new Login(); 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        login.setusername(data.user)
        login.setpassword(data.password)
        login.submitbtn(); 
      });
    });
   
    
  });