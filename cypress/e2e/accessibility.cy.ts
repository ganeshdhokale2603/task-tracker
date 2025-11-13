describe('Accessibility checks', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.injectAxe();
  });

  it('has no detectable accessibility violations on load', () => {
    cy.checkA11y();
  });

  it('modal component is accessible when opened', () => {
    // Wait for Info button to appear and click
    cy.contains('button', 'Info', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Wait for modal to appear
    cy.get('.modal, [role="dialog"]', { timeout: 10000 })
      .should('be.visible');

    // Now check accessibility inside the modal
    cy.checkA11y();
  });
});
