describe('Custom Commands', () => {
    it('should login to application using custom commands', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})