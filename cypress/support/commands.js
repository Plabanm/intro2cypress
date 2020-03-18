import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'


addMatchImageSnapshotCommand({
    failureTreshold: 0.00,
    failureTresholdType: 'percent',
    customDiffConfig: {treshold: 0.0},
    capture: 'viewport'
})

Cypress.Commands.add("setResolution", (size) => {
    if(Cypress._.isArray(size)){
        cy.viewport(size[0], size[1])
    }else{
        cy.viewport(size)
    }
})

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies({log: true})
    cy.clearLocalStorage()
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('input[type=checkbox]').click()
    cy.contains('Sign in').click()
})