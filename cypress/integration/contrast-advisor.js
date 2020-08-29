/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor Demo', () => {
  it('should show contrast issues on Applitools dashboard', () => {
    cy.eyesOpen({
      appName: 'Contrast Advisor',
      batchName: 'Contrast Advisor',
    });
    cy.visit('http://www.fortherecord.simonfosterdesign.com/');
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
