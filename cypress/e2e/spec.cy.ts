describe('Task Tracker', () => {
  beforeEach(() => cy.visit('/'));

  it('adds a new task', () => {
    cy.get('input[placeholder="New task"]').type('Learn Angular');
    cy.contains('Add').click();
    cy.contains('Learn Angular').should('exist');
  });

  it('toggles completion', () => {
    cy.contains('Learn Angular').prev('input[type="checkbox"]').check();
    cy.contains('Learn Angular').should('have.class', 'line-through');
  });

  it('deletes task', () => {
    cy.contains('✕').click();
    cy.contains('Learn Angular').should('not.exist');
  });
});
