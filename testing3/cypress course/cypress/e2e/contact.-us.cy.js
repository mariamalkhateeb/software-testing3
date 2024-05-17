describe('contact Us', () => {
    before(function(){
        cy.fixture("contact-us").then(function(data){
            globalThis.data=data
        })
    })
    
    beforeEach(function(){
        cy.visit(data.contactUsUrl);
    })

    // it.skip('[1] finding elm by class name', () => {
    //     cy.visit("https://www.automationexercise.com/");
    //     cy.get(".section-title:nth(1)").click();

    // });

    it('[1] enter all fields in contact us page', () => {
        cy.name().type(data.name);
        cy.email().type(data.mail);
        cy.messageBody().type(data.message);
        cy.subjectBody().type(data.subject);
        cy.submitBtn();
       // cy.url().should('include','thank-yo')

    });

    it('[2] dont enter email in contact us page', () => {
        cy.name().type(data.name);
        cy.messageBody().type(data.message);
        cy.subjectBody().type(data.subject);
        cy.submitBtn();

    });

    it('[3] dont enter name in contact us page', () => {
        cy.email().type(data.mail);
        cy.messageBody().type(data.message);
        cy.subjectBody().type(data.subject);
        cy.submitBtn();
       // cy.contains("Error: all fields are required").should("be-exist");

    });
    
});