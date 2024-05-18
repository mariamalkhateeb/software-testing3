import navgation from "../support/POM/navigations-pom";
import contactUs from "../support/POM/contactUs-pom";
import signup_login from "../support/POM/signup-login-pom";
const nav = new navgation();
const cont = new contactUs();
const user = new signup_login();
describe('contact Us', () => {
    before(function(){
        cy.fixture("contact-us").then(function(data){
            globalThis.data=data
        })
    })
    
    beforeEach(function(){
        // cy.visit(data.contactUsUrl);
        nav.contactUsNav();
    })

    // it.skip('[1] finding elm by class name', () => {
    //     cy.visit("https://www.automationexercise.com/");
    //     cy.get(".section-title:nth(1)").click();

    // });

    it('[1] enter all fields in contact us page', () => {
        cy.name().type(data.name);
        // cy.email().type(data.mail);
        user.correctemail();
        cont.contactusfildes();
        // cy.messageBody().type(data.message);
        // cy.subjectBody().type(data.subject);
        // cy.submitBtn();
       // cy.url().should('include','thank-yo')

    });

    it('[2] dont enter email in contact us page', () => {
        cy.name().type(data.name);
        cont.contactusfildes();
        // cy.messageBody().type(data.message);
        // cy.subjectBody().type(data.subject);
        // cy.submitBtn();

    });

    it('[3] dont enter name in contact us page', () => {
        // cy.email().type(data.mail);
        user.correctemail();
        cont.contactusfildes();
        // cy.messageBody().type(data.message);
        // cy.subjectBody().type(data.subject);
        // cy.submitBtn();
       // cy.contains("Error: all fields are required").should("be-exist");

    });
    
});