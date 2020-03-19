import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login Page', () => {
    LoginPage.visitLoginPage()
})

When('I submit login form with {string} and {string}', (username, password) => {
    LoginPage.fillUserName(username)
    LoginPage.fillPassword(password)
    LoginPage.clickSubmitButton()
})

Then('I should see homePage', () => {
    cy.get('#account_summary_tab').should('be.visible')
    
})