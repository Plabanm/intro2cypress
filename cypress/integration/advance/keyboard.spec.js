describe('keyboard press simulation', () => {
    it('should submit searchbox by simulating keyboard action', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('some text {enter}')
    })
})