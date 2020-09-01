/// <reference types="Cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe('Contrast Advisor Demo', () => {
  it('should show contrast issues on Applitools dashboard', () => {
    cy.eyesOpen({
      appName: 'Contrast Advisor',
      batchName: 'Contrast Advisor',
    });
    cy.visit('https://heavyweight.nl/');
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});
