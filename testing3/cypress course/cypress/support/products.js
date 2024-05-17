Cypress.Commands.add('womenCategory', () => { 
    cy.get('#Women')
    
 })

Cypress.Commands.add('dress', () => { 
    cy.get('[href="/category_products/1"]')
    
 })
Cypress.Commands.add('product2', () => { 
   cy.get('[href="/product_details/2"]')
    
 })
Cypress.Commands.add('product1', () => { 
   cy.get('[href="/product_details/1"]')
    
 })
Cypress.Commands.add('brand', () => { 
   cy.get('[href="/brand_products/H&M"]')
    
 })
Cypress.Commands.add('continue', () => { 
   cy.get('.btn.btn-success.close-modal.btn-block')
    
 })
Cypress.Commands.add('email', () => { 
   cy.get('#email')
    
 })
Cypress.Commands.add('name', () => { 
   cy.get('#name')
    
 })
Cypress.Commands.add('btnReview', () => { 
   cy.get('#button-review')
    
 })

Cypress.Commands.add('addToCart', () => { 
    cy.get('.btn.btn-default.add-to-cart').first()
 })
Cypress.Commands.add('AddToCart', () => { 
   cy.get('.btn.btn-default.cart')
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
Cypress.Commands.add('review', () => { 
   cy.get('[name="review"')
 })
