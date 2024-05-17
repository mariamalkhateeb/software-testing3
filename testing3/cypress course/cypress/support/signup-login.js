Cypress.Commands.add('name', () => { 
    cy.get('[name="name"]')
 })
Cypress.Commands.add('signUpEmail', () => { 
    cy.get('[data-qa="signup-email"]')
 })
Cypress.Commands.add('signUpBtn', () => { 
    cy.get('[data-qa="signup-button"]').click()
 })

Cypress.Commands.add('loginEmail', () => { 
    cy.get('[data-qa="login-email"]')
 })
Cypress.Commands.add('password', () => { 
    cy.get('[name="password"]')
 })
 Cypress.Commands.add('loginBtn', () => { 
    cy.get('[data-qa="login-button"]').click()
 })