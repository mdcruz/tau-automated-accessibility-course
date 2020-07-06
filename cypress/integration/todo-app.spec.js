/// <reference types="cypress"/>

describe('Todo application', () => {
  it('should log any accessibility failures', () => {
    cy.visit('http://todomvc.com/examples/react');
    cy.injectAxe();
    cy.checkA11y();
  });
});
