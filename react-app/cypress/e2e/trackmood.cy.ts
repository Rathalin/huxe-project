
const email = 'abc@gmail.com';
const pass = 'moodTester';
const username = 'MoodUser';


describe('track mood', () => {

    beforeEach(() => {
            cy.visit('http://localhost:3000/dashboard');
        })

    it('track mood', () => {
        // log in
        cy.contains('Sign in');
        cy.login(email, pass);

        // click on track mood
        cy.get(':nth-child(2) > .MuiBox-root > .MuiButtonBase-root').click();

        // click a smiley
        cy.get(':nth-child(2) > .MuiBox-root > .MuiButtonBase-root').click();

        cy.contains('Back').click();
        cy.url().should('include', 'dashboard');

    })

  });