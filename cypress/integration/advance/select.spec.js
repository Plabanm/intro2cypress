describe('Select Box', () => {
    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('should select option from box', () => {
        cy.get('#prefered-interface').select('Both')
        cy.get('#prefered-interface').should('have.value', 'Both')

        cy.get('#prefered-interface').select('JavaScript API')
        cy.get('#prefered-interface').should('have.value', 'JavaScript API')
    })
})