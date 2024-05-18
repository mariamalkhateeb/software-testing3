import navgation from "../support/POM/navigations-pom";
import signup_login from "../support/POM/signup-login-pom";
const user = new signup_login();
const nav = new navgation();
describe('signUp-login', () => {
  before(function () {
    cy.fixture("signUp-login").then(function (data) {
      globalThis.data = data
    })
  })

  beforeEach(function () {
    // cy.visit(data.signUpLoginUrl);
    nav.signup_loginNav();
  })

  it('[1] enter valid email and password for login', () => {
    // cy.password().type(data.correctPassword);
    // cy.loginEmail().type(data.email);
    user.correctPassword();
    user.correctemail();

    cy.loginBtn();
  });
  it('[2] enter valid email and invalid password for login', () => {
    // cy.password().type(data.incorrectPassword);
    // cy.loginEmail().type(data.email);
    user.incorrectPassword();
    user.correctemail();
    cy.loginBtn();
  });
  it('[3] enter valid password and invalid email for login', () => {
    // cy.password().type(data.correctPassword);
    // cy.loginEmail().type(data.incorrectEmail);
    user.correctPassword();
    user.incorrectEmail();
    cy.loginBtn();
  });
  it('[4] enter invalid email and invalid password in login', () => {
    // cy.password().type(data.incorrectPassword);
    // cy.loginEmail().type(data.incorrectEmail);
     user.incorrectPassword();
     user.incorrectEmail();
    cy.loginBtn();
  });
  it('[5] enter email only in login', () => {
    // cy.loginEmail().type(data.email);
    user.correctemail();
    cy.loginBtn();
  });
  it('[6] enter password only in login', () => {
    // cy.password().type(data.correctPassword);
    user.correctPassword();
    cy.loginBtn();
  });
  it('[7] enter name and email in signUp', () => {
    cy.name().type(data.name);
    // cy.signUpEmail().type(data.email);
    user.correctemail();
    cy.signUpBtn();
  });
  it('[8] enter email only in signUp', () => {
    // cy.signUpEmail().type(data.email);
    user.correctemail();
    cy.signUpBtn();
  });
  it('[9] enter name only in signUp', () => {
    cy.name().type(data.name);
    cy.signUpBtn();
  });
  it('[10] enter invalid format for email in signUp', () => {
    cy.name().type(data.name);
    // cy.signUpEmail().type(data.incorrectEmail);
    user.incorrectEmail();
    cy.signUpBtn();
  });
});