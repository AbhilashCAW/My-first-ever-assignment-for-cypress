/// <reference types="cypress" />
describe("First Assignment", () => {
    beforeEach(() => {
      cy.visit("http://automationpractice.com/index.php");
    });
    it("Uploading File", () => {
      cy.fixture('cypress.jpeg').as('file');
      cy.get('#contact-link').click()      
      .get('select[id="id_contact"]').select('Customer service')
      .get('[id="email"]').click().type('abc@abc.com')
      .get('[id="id_order"]').click().type('Demo Order')  
      .get('#fileUpload').selectFile('@file')
      .get('[name="message"]').click().type('practice')
      .get('[class="icon-chevron-right right"]').first().click({force: true});
  });
});