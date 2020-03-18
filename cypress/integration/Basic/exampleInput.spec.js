import { asap } from "rxjs/internal/scheduler/asap"

describe('working with inputs', ()=>{
    it('should overtide current time', () =>{
        const date = new Date(2020, 03, 04).getTime()
        cy.clock(date)
        cy.log(date)
    })
    it('should load  website', () =>{
        cy.visit('http://zero.webappsecurity.com/login.html', {timeout: 10000})
        cy.url().should('include', 'login')
        cy.log('website loaded')
        cy.clearCookies({log: true})
        cy.clearLocalStorage('your item', {log: true})
        cy.title().should('include', 'zero - Log in')
    })

    it('should fill username', () =>{
        cy.get('#user_login').as('userName')
        cy.get('@userName').clear()
        cy.get('@userName').type('some invalid name')
    })
    it('should fill password', () =>{
        cy.get('#user_password').clear()
        cy.get('#user_password').type('some invalid password',{delay: 50})   
    })

    it('should check checkbox', () =>{
        cy.get('input[type=checkbox]').click()
        cy.wait(5000)
    })

    it('should fill submit the form', () =>{
        cy.contains('Sign in').click()
    })

    it('should display error message', () =>{
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain','Login and/or password are wrong.')
        
    })
})