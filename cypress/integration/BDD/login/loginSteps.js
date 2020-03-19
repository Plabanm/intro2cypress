import {Given, When, Then} from 'cypress-cucumber-preprocessor'
import LoginPage from './loginPage'

Given('I open login Page', () => {
    LoginPage.visitLoginPage()
})

When('I submit login form', () => {
    LoginPage.fillUserName()
    LoginPage.fillPassword()
    LoginPage.clickSubmitButton()
})

Then('I should see homePage', () => {
    cy.get('#account_summery_tab').should('be.visible')
    
})