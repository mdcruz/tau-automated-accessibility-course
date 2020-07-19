/// <reference types="cypress"/>

describe('Todo application', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react');
    cy.injectAxe();
  });

  it('should log any accessibility failures', () => {
    cy.checkA11y();
  });

  it('should exclude specific elements on the page', () => {
    cy.checkA11y({ exclude: ['.learn'] });
  });

  it('should only test specific element on the page', () => {
    cy.checkA11y('.learn');
  });
});
