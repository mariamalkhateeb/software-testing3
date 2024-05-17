describe('product', () => {

    beforeEach(function(){
        cy.visit("https://www.automationexercise.com/products")
    })
    it.only('[1] select women category then choose dress ', () => {
        cy.womenCategory().click({force:true})
        //cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.wait(1000)
        cy.dress().click({force:true})
    });
    
    it('[2] add product from women category to cart then view cart', () => {
        
        cy.visit("https://www.automationexercise.com/category_products/1")
        cy.wait(2000)
        cy.addToCart().click()
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.viewCart().click()
        cy.url().should('include','view')
    });


    it('[3] view product then write a review', () => {
        cy.get('[href="/product_details/1"]').click()
        cy.get('#name').type("mariam")
        cy.get('#email').type("mariam@gmail.com")
        cy.get('[name="review"').type("good product")
        cy.get('#button-review').click()
        
    });
    it('[4] select H&M brand then view product ', () => {

        cy.get('[href="/brand_products/H&M"]').click()
        cy.get('[href="/product_details/2"]').click()

    });
    it('[5] select H&M brand then add to cart then continue shopping', () => {

        cy.get('[href="/brand_products/H&M"]').click()
        cy.get('[href="/product_details/2"]').click()
        cy.get('.btn.btn-default.cart').click()
        cy.get('.btn.btn-success.close-modal.btn-block').click()

        
    });
    it('[6] search a specific product', () => {
        cy.search().type("blue")
        cy.searchBtn()
    });
    it('[7] select a product from all products', () => {

        cy.get('.btn.btn-default.add-to-cart').first().click()
    });
});