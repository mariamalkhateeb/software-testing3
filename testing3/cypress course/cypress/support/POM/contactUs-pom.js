class contactUs {

 contactusfildes() {
  cy.messageBody().type(data.message);
  cy.subjectBody().type(data.subject);
  cy.submitBtn();  
 }   
}
export default contactUs