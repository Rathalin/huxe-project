const email = 'abc@gmail.com';
const pass = 'moodTester';
const username = 'MoodUser';

describe('priority tracking', () => {

    beforeEach(() => {
            cy.visit('http://localhost:3000/dashboard');

            // log in
            cy.contains('Sign in');
            cy.login(email, pass);

            // click on change priorities
            cy.get(':nth-child(1) > .MuiBox-root > .MuiGrid2-container > .MuiGrid2-root > .MuiButtonBase-root').click();

            // check if we are rerouted correctly
            cy.url().should('include', 'priorities')

            // now try to add a priority
            cy.get('.MuiGrid2-grid-xs-12 > .MuiBox-root > .MuiButtonBase-root').click()
            })

    it('user is forced to enter details correctly', () => {
        
        // try to add a priority without entering details
        cy.get('.css-1ero9j4 > .MuiButtonBase-root').click()

        // a warning should appear
        cy.contains('Title and weekly goal are required.');
        
    })

    it('user enters data correctly and priority is added', () => {
        
        // create a random priority
        let randomPriority = (Math.random() + 1).toString(36).substring(7);

        // user can enter details
        cy.get('input[placeholder=Title]').type(randomPriority).should('have.value', randomPriority);

        // add priority
        cy.get('.css-1ero9j4 > .MuiButtonBase-root').click()

        // we should be on the correct page
        cy.contains('Add Priority');
        // the new priority should be saved and displayed
        cy.contains(randomPriority);
        
        cy.contains('Back').click();
        // my priorities should be displayed
        cy.url().should('include', 'priorities');
    })

  });