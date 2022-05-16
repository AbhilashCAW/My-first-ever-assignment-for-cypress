/// <reference types="cypress" />

const { fn } = require("check-more-types");

describe("First Assignment", () => {
  it("Adding 5 products to cart", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get('[data-id-product="1"]').first().click().get('[class="icon-chevron-left left"]', { timeout: 1000 }).click()
      .get('[data-id-product="2"]').first().click().get('[class="icon-chevron-left left"]', { timeout: 1000 }).click()
      .get('[data-id-product="3"]').first().click().get('[class="icon-chevron-left left"]', { timeout: 1000 }).click()
      .get('[data-id-product="4"]').first().click().get('[class="icon-chevron-left left"]', { timeout: 2000 }).click()
      .get('[data-id-product="6"]').first().click().get('[class="icon-chevron-left left"]', { timeout: 1000 }).click()
      .get('[class="icon-chevron-right right"]', { timeout: 1000 }).last().click();
  });
  it("validating total cart amount with individual product price", () => {
      cy.wrap({ sum: fn })
      .get('sum', {timeout:"40000"}, '#total_product_price_1_1_0', '#total_product_price_2_7_0', '#total_product_price_3_13_0', '#total_product_price_4_16_0', '#total_product_price_6_31_0')
      .should('eq', 151.00)      
  });
});
