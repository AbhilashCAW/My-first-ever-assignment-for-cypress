/// <reference types="cypress" />
describe("First Assignment", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com/index.php");
  });
  //Positive flow
  it("Valid", () => {
    cy.get("#search_query_top", { timeout: 10000 })
      .click()
      .type("Dresses")
      .get('[type="submit"]')
      .first()
      .click()
      .get(".lighter")
      .should("contain.text", "Dresses");
  });
  //Nagative testing
  it("Invalid", () => {
    cy.get("#search_query_top", { timeout: 10000 })
      .click()
      .type("Tshirts")
      .get('[type="submit"]')
      .first()
      .click()
      .get(".heading-counter")
      .should("contain.text", '0 results have been found');
  });
});
