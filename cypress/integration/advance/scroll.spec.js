describe('Scrolls the page', () => {
    it('should scroll doen and up', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.wait(5000)
        cy.get('#submit-button').scrollIntoView()
        cy.wait(5000)
        cy.get('header').scrollIntoView()
        cy.wait(5000)

    })
})