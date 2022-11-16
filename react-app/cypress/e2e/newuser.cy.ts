import Chance from 'chance';

// <reference types="cypress"/>
const chance = new Chance();

const email = chance.email();
const pass = 'ValidPassword23';
const username = 'user';


describe('track mood', () => {

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

    // it('signs in new user', () => {
    //   cy.visit('localhost:3000/register');
    //   //cy.get('#signup')
    //   //cy.get('#signup').click();
    //   //document.querySelector('#signup')
    //   //cy.url().should('include', 'register')
    //   cy.contains('Sign up');
    //   cy.get('input[name=username]').type(username);
    //   cy.get('input[name=email]').type(email);
    //   cy.get('input[name=password]').type(pass);
    //   cy.get('button[type=submit]').click();
    //   //cy.contains('Dashboard');
    // })

  });