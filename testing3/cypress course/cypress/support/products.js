Cypress.Commands.add('womenCategory', () => { 
    cy.get('#Women')
    
 })


Cypress.Commands.add('dress', () => { 
    cy.get('[href="/category_products/1"]')
    
 })
 Cypress.Commands.add('top', () => { 
  cy.get('[href="/category_products/2"]')
  
})
Cypress.Commands.add('saree', () => { 
  cy.get('[href="/category_products/7"]')
  
})
Cypress.Commands.add('menCategory', () => { 
  cy.get('#Men')
  
})
Cypress.Commands.add('Tshirts', () => { 
  cy.get('[href="/category_products/3"]')
  
})
Cypress.Commands.add('Jeans ', () => { 
  cy.get('[href="/category_products/6"]')
  
})

Cypress.Commands.add('KidsCategory', () => { 
  cy.get('#Kids')
  
})
Cypress.Commands.add('Dress ', () => { 
  cy.get('[href="/category_products/4"')
  
})
Cypress.Commands.add('TopsShirts  ', () => { 
  cy.get('[href="/category_products/5"]')
  
})

 
Cypress.Commands.add('product2', () => { 
   cy.get('[href="/product_details/2"]')
    
 })
Cypress.Commands.add('product1', () => { 
   cy.get('[href="/product_details/1"]')
    
 })
Cypress.Commands.add('brandPolo', () => { 
   cy.get('[href="/brand_products/Polo"]')
    
 })
 Cypress.Commands.add('brand', () => { 
  cy.get('[href="/brand_products/H&M"]')
   
})
Cypress.Commands.add('brandMadame', () => { 
  cy.get('[href="/brand_products/Madame"]')
   
})
Cypress.Commands.add('brandMastHarbour', () => { 
  cy.get('[href="/brand_products/Mast.&.Harbour"]')
   
})
Cypress.Commands.add('brandBabyhug', () => { 
  cy.get('[href="/brand_products/Babyhug"]')
   
})
Cypress.Commands.add('brandAllenSollyJunior', () => { 
  cy.get('[href="/brand_products/Allen.Solly.Junior"]')
   
})
Cypress.Commands.add('brandKookier', () => { 
  cy.get('[href="/brand_products/Kookie.Kids"]')
   
})
Cypress.Commands.add('brandBiba', () => { 
  cy.get('[href="/brand_products/Biba"]')
   
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
 
 Cypress.Commands.add('topbutton', () => { 
  cy.get('[href="#top"]')
})
