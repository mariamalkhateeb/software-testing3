class navgation{
  signup_loginNav() {
    cy.visit(data.signUpLoginUrl);
  }
  contactUsNav(){
  cy.visit(data.contactUsUrl);  
  }
  
}
export default navgation