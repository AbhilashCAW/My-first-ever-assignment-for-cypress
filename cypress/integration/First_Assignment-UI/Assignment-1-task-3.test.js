/// <reference types="cypress" />
describe("First Assignment", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });
  it("Applying large size catelog", () => {
    cy.get('[title="T-shirts"]').first().click({ force: true });
    cy.get('[name="layered_id_attribute_group_3"]').click();
    cy.contains("Size: L").should("exist");
  });
});
