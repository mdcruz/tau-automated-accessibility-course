/// <reference types="cypress"/>

describe('Todo application', () => {
  it('should log any accessibility failures', () => {
    cy.visit('http://todomvc.com/examples/react');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should exclude specific elements on the page', () => {
    cy.visit('http://todomvc.com/examples/react');
    cy.injectAxe();
    cy.checkA11y({ exclude: ['.learn'] });
  });

  it('should only test specific element on the page', () => {
    cy.visit('http://todomvc.com/examples/react');
    cy.injectAxe();
    cy.checkA11y('.learn');
  });
});
