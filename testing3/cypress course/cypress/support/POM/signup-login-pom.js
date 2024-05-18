class signup_login {

  correctPassword() {
    cy.password().type(data.correctPassword);

  }
  correctemail() {
    cy.loginEmail().type(data.email);
  }

  incorrectPassword() {
    cy.password().type(data.incorrectPassword);
  }
  incorrectEmail() {
    cy.loginEmail().type(data.incorrectEmail);
  }


}
export default signup_login