import products from "../support/POM/product-pom";
const prod = new products();
describe('Home', () => {
  before(function () {
    cy.fixture("home").then(function (data) {
      globalThis.data = data
    })
  })

  beforeEach(function () {
    cy.visit(data.HomeUrl);
  })

  it('[1] select women category then choose dress ', () => {
    // cy.womenCategory().click({ force: true })
    // //cy.on('uncaught:exception', (err, runnable) => { return false })
    // cy.wait(1000)
    prod.openwomenCategory();
    cy.dress().click({ force: true })
  });
  it('[2] select women category then choose top ', () => {
    prod.openwomenCategory();
    cy.top.click({ force: true })
  });
  it('[3] select women category then choose saree ', () => {
    prod.openwomenCategory();
    cy.saree().click({ force: true })
  });
  it('[4] select men category then choose Tshirts ', () => {
    // cy.menCategory().click({ force: true })
    // //cy.on('uncaught:exception', (err, runnable) => { return false })
    // cy.wait(1000)
    prod.openmenCategory();
    cy.Tshirts().click({ force: true })
  });
  it('[5] select men category then choose Jeans select product then continue ', () => {
    prod.openmenCategory();
    cy.Jeans().click({ force: true })
    prod.selectproductaddThenContinue();
  });
  it('[6] select Kids category then choose dress ', () => {
    // cy.KidsCategory().click({ force: true })
    // //cy.on('uncaught:exception', (err, runnable) => { return false })
    // cy.wait(1000)
    prod.openKidsCategory();
    cy.Dress().click({ force: true })
  });
  it('[7] select Kids category then choose Jeans ', () => {
    prod.openKidsCategory();
    cy.TopsShirts().click({ force: true })
  });
  it('[8] select brand polo', () => {
    cy.brandPolo().click({ force: true })
    prod.selectproductaddThenContinue();
  });
  it('[9] select brand h&m select product then continue', () => {
    cy.brand().click({ force: true })
    prod.selectproductaddThenContinue();
  });
  it('[10] select brand Madame select product then continue', () => {
    cy.brandMadame().click({ force: true })
    prod.selectproductaddThenContinue();
  });
  it('[11] select brand brandMast&Harbour select product then view', () => {
    cy.brandMastHarbour().click({ force: true })
    prod.selectproductaddThenview();
  });
  it('[13] select brand brandBabyhug select product then view', () => {
    cy.brandBabyhug().click({ force: true })
    prod.selectproductaddThenview();
  });
  it('[14] select brand brandAllenSollyJunior', () => {
    cy.brandAllenSollyJunior().click({ force: true })
  });
  it('[15] select brand brandKookier', () => {
    cy.brandKookier().click({ force: true })
  });
  it('[16] select brand brandBiba', () => {
    cy.brandBiba().click({ force: true })
  });
  it('[17] select top button', () => {
    cy.topbutton().click({ force: true })
  });
  it('[18] select brand polo', () => {

  });
});