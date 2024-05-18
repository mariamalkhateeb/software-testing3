class products{
  addThenContinue (){
    cy.AddToCart().click()
    cy.continue().click()
  }
  addThenviewcard (){
    cy.AddToCart().click()
    cy.viewCart().click() 
  }
  openwomenCategory (){
    cy.visit(data.womenCategoryUrl)
        cy.wait(2000)
  }
  openmenCategory(){
    cy.menCategory().click({ force: true })
    //cy.on('uncaught:exception', (err, runnable) => { return false })
    cy.wait(1000)
  }
  openKidsCategory(){
    cy.KidsCategory().click({ force: true })
    //cy.on('uncaught:exception', (err, runnable) => { return false })
    cy.wait(1000)
  }
  selectproductaddThenContinue (){
    cy.brand().click()
    cy.product2().click()
    cy.AddToCart().click()
    cy.continue().click()
  }
  selectproductaddThenview (){
    cy.brand().click()
    cy.product2().click()
    cy.AddToCart().click()
    cy.viewCart().click() 
  }

}
export default products