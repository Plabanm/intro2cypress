describe('login with Fixtures data', () => {
    it('should try to login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        
        cy.fixture('user').then((user) => {
            const userName = user.username
            const password = user.password

            cy.get('#user_login').type(userName)
            cy.get('#user_password').type(password)
            cy.get('input[type=checkbox]').click()
        })
    })

    
})