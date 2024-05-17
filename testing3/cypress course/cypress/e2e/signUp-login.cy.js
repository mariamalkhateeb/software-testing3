describe('signUp-login', () => {
    before(function(){
        cy.fixture("signUp-login").then(function(data){
            globalThis.data=data
        })
    })

    beforeEach(function(){
        cy.visit(data.signUpLoginUrl);
    })

    it('[1] enter valid email and password for login', () => {
        cy.password().type(data.correctPassword);
        cy.loginEmail().type(data.email);
        cy.loginBtn();
    });
    it('[2] enter valid email and invalid password for login', () => {
        cy.password().type(data.incorrectPassword);
        cy.loginEmail().type(data.email);
        cy.loginBtn();
    });
    it('[3] enter valid password and invalid email for login', () => {
        cy.password().type(data.correctPassword);
        cy.loginEmail().type(data.email);
        cy.loginBtn();
    });
    it('[4] enter invalid email and invalid password in login', () => {
        cy.password().type(data.incorrectPassword);
        cy.loginEmail().type(data.email);
        cy.loginBtn();
    });
    it('[5] enter email only in login', () => {
        cy.loginEmail().type(data.email);
        cy.loginBtn();
    });
    it('[6] enter password only in login', () => {
        cy.password().type(data.correctPassword);
        cy.loginBtn();
    });
    it('[7] enter name and email in signUp', () => {
        cy.name().type(data.name);
        cy.signUpEmail().type(data.email);
        cy.signUpBtn();
    });
    it('[8] enter email only in signUp', () => {
        cy.signUpEmail().type(data.email);
        cy.signUpBtn();
    });
    it('[9] enter name only in signUp', () => {
        cy.name().type(data.name);
        cy.signUpBtn();
    });
    it('[10] enter invalid format for email in signUp', () => {
        cy.name().type(data.name);
        cy.signUpEmail().type(data.incorrectEmail);
        cy.signUpBtn();
    });
});