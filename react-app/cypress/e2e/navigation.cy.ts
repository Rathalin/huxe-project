
const email = 'abc@gmail.com';
const pass = 'moodTester';
const username = 'MoodUser';


describe('track mood', () => {

    beforeEach(() => {
            cy.visit('http://localhost:3000/dashboard');
            cy.contains('Sign in');
            cy.login(email, pass);
        })

    it('log out works', () => {
        // go to log out link
        cy.get('.MuiToolbar-root > :nth-child(2) > .MuiButtonBase-root > .MuiTypography-root').click();
        cy.get('.MuiList-root > :nth-child(3)').click();
        // user should be logged out
        cy.contains('Sign in')
    })

    it('showing priorities works', () => {
        // go to log out link
        cy.get('.MuiToolbar-root > :nth-child(2) > .MuiButtonBase-root > .MuiTypography-root').click();
        cy.get('.MuiList-root > :nth-child(1)').click();
        // user should be logged out
        cy.contains('Priorities')
    })

  });