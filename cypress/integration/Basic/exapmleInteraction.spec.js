describe('browser Action', () => {
    it('should load books website', () =>{
        cy.visit('http://books.toscrape.com/', {timeout: 10000})
        cy.url().should('include', 'toscrap')
        cy.log('website loaded')
        cy.reload()
        cy.log('after relaod')
    })

    it('should click on travel category', () =>{
        cy.get('a')
            .contains('Travel')
            .click()

        cy.get('h1').contains('Travel')
    })

    it('should display correct number of books', () =>{
        cy.get('.product_pod')
            .its('length')
            .should('eq', 11)
    })

    it('should click on poetry category', () =>{
        cy.get('a')
            .contains('Poetry')
            .click()

        cy.get('h1').contains('Poetry')
    })

    it('should click on olio Book and price £23.88', () =>{
        cy.get('a')
            .contains('Olio')
            .click()

        cy.get('h1').contains('Olio')
    })

    it('should display correct price £23.88', () =>{
        cy.get('.price_color').contains('£23.88')
    })
})