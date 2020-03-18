describe('Screenshots', () => {
    it('Full Page screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({capture: 'fullPage'})
    })

    it('Sin screenshot', () => {
        cy.get('header').screenshot()
    })
})