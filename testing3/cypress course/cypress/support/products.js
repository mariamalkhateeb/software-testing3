Cypress.Commands.add('womenCategory', () => { 
    cy.get('#Women')
    
 })

Cypress.Commands.add('dress', () => { 
    cy.get('[href="/category_products/1"]')
    
 })

Cypress.Commands.add('addToCart', () => { 
    cy.get('.btn.btn-default.add-to-cart').first()
 })

Cypress.Commands.add('viewCart', () => { 
    cy.get('[href="/view_cart"]').first()
 })



 Cypress.Commands.add('search', () => { 
    cy.get('#search_product')
 })
Cypress.Commands.add('searchBtn', () => { 
    cy.get('#submit_search').click()
 })