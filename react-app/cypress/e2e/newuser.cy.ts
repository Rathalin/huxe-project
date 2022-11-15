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

    it('show sign in first', () => {
                cy.contains('Sign in');
            })
    })

    it('signs in new user', () => {
      cy.visit('localhost:3000/register');
      //cy.get('#signup')
      //cy.get('#signup').click();
      //document.querySelector('#signup')
      //cy.url().should('include', 'register')
      cy.contains('Sign up');
      cy.get('input[name=username]').type(username);
      cy.get('input[name=email]').type(email);
      cy.get('input[name=password]').type(pass);
      cy.get('button[type=submit]').click();
      //cy.contains('Dashboard');
    })
