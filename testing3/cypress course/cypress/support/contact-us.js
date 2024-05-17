Cypress.Commands.add('name', () => { 
    cy.get('[name="name"]')
 })
Cypress.Commands.add('email', () => { 
    cy.get('[name="email"]')
 })
Cypress.Commands.add('subjectBody', () => { 
    cy.get('[name="subject"]')
 })
Cypress.Commands.add('messageBody', () => { 
    cy.get('[name="message"]')
 })
Cypress.Commands.add('submitBtn', () => { 
    cy.get('[name="submit"]').click();
 })