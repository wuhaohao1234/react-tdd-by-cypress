/* eslint-disable no-undef */
describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="messageText"]')
      .type('hello world');

    cy.get('[data-testid="sendButton"]')
      .click();

    cy.get('[data-testid="messageText"]')
      .should('have.value', '');

    cy.contains('hello world');
  });
});