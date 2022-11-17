import '@testing-library/cypress/add-commands'
/// <reference types="cypress" />

Cypress.Commands.add('register', (username, email, password) => { 
    cy.visit('http://localhost:3000/register')
    cy.contains('Sign up');
    cy.get('input[name=username]').type(username).should('have.value', username);
    cy.get('input[name=email]').type(email).should('have.value', email);
    cy.get('input[name=password]').type(password).should('have.value', password);
    cy.get('button[type=submit]').click();
 })

 Cypress.Commands.add('login', (email, password) => { 
    cy.visit('http://localhost:3000/')
    cy.contains('Sign in');
    cy.get('input[name=email]').type(email).should('have.value', email);
    cy.get('input[name=password]').type(password).should('have.value', password);
    cy.get('button[type=submit]').click();
    cy.contains('Dashboard');
 })




// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }