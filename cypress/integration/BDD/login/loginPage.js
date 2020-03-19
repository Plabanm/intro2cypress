const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const REMEMBER_ME = '#user_remember_me'
const SUBMIT_BUTTON = 'input[name="submit"]'

class LoginPage {
    static visitLoginPage(){
        cy.visit(URL)
    }

    static fillUserName(name){
        cy.get(USERNAME_INPUT).type(name)
    }

    static fillPassword(password){
        cy.get(PASSWORD_INPUT).type(password)
    }

    static clickSubmitButton(){
        cy.get(SUBMIT_BUTTON).click()
    }
}
export default LoginPage