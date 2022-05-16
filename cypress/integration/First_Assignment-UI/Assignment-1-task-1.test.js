/// <reference types="cypress" />

describe('First Assignment', () => {
 it('Validating word suggession', () => {
        cy.visit('http://automationpractice.com/index.php')
        .get('#search_query_top', {timeout:50000}).click().type('Dre')
        .get('.ac_results').should('be.visible')
        .get('#search_query_top').clear().type('Dr')
        .get('.ac_results').should('not.be.visible');  

    });
});