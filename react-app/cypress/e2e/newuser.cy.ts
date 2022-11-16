import Chance from 'chance';

// <reference types="cypress"/>
const chance = new Chance();

const email = chance.email();
const pass = 'ValidPassword';
const username = 'user';


describe('new user', () => {

    beforeEach(() => {
            cy.visit('http://localhost:3000');
        })

    it('user first time registration works', () => {
        // direct to the login page
        cy.contains('Sign in');
        // find the button to the register page and click it
        cy.contains('Don\'t have an account? Sign Up').click()
        // now we should be on the register page
        cy.contains('Sign up');
        // check if we are rerouted correctly
        cy.url().should('include', 'register')
        // sign in
        cy.get('input[name=username]').type(username).should('have.value', username);
        cy.get('input[name=email]').type(email).should('have.value', email);
        cy.get('input[name=password]').type(pass).should('have.value', pass);
        cy.get('button[type=submit]').click();
    })

    it('unregistered user tries login', () => {
      // check if we are on the correct page
      cy.contains('Sign in');

      // sign the user in
      cy.get('input[name=email]').type(email).should('have.value', email);
      cy.get('input[name=password]').type(pass).should('have.value', pass);
      cy.get('button[type=submit]').click();

      // the unregistered user should not be able to login
      cy.contains('Invalid identifier or password');
    })

    it('if user is not logged in redirect', () => {
      cy.visit('http://localhost:3000/dashboard');
      cy.contains('Sign in');
    })

  });