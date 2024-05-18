import products from "../support/POM/product-pom";
const prod = new products();
describe('product', () => {

    before(function(){
        cy.fixture("products").then(function(data){
            globalThis.data=data
        })
    })
    
    beforeEach(function(){
        cy.visit(data.productsUrl);
    })

    // beforeEach(function(){
    //     cy.visit("https://www.automationexercise.com/products")
    // })

    it('[1] select women category then choose dress ', () => {
        cy.womenCategory().click({force:true})
        //cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.wait(1000)
        cy.dress().click({force:true})
    });
    
    it('[2] add product from women category to cart then view cart', () => {
        
        cy.visit(data.womenCategoryUrl)
        cy.wait(2000)
        cy.addToCart().click()
        cy.on('uncaught:exception', (err, runnable) => { return false })
        cy.viewCart().click()
        cy.url().should('include','view')
    });


    it('[3] view product then write a review', () => {
        cy.product1().click()
        cy.name().type(data.name)
        cy.email().type(data.mail)
        cy.review().type(data.review)
        cy.btnReview().click()
        
    });
    it('[4] select H&M brand then view product ', () => {

        cy.brand().click()
        cy.product2().click()

    });
    it('[5] select H&M brand then add to cart then continue shopping', () => {

        cy.brand().click()
        cy.product2().click()
        // cy.AddToCart().click()
        // cy.continue().click()
        prod.addThenContinue();
        

        
    });
    it('[6] select H&M brand then add to cart then view cart', () => {

      cy.brand().click()
      cy.product2().click()
      cy.viewCart().click()    
  });

    it('[7] search a specific product', () => {
        cy.search().type(data.searchValue)
        cy.searchBtn()
    });
    it('[8] select a product from all products', () => {

        cy.addToCart().click()
    });
});